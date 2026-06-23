/**
 * Founding Member Application Router
 *
 * Receives application submissions from the marketing site, writes them as rows
 * to the Notion "Lifewoven — Founding Member Applications" database, and fires
 * an owner notification via the built-in notification service.
 *
 * The Notion database ID is: a0d9fa1a-2c73-47fc-8c8c-ba32d9e562dd
 */
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

const NOTION_DB_ID = "a0d9fa1a2c7347fc8c8cba32d9e562dd";
const NOTION_API = "https://api.notion.com/v1";

async function writeToNotion(payload: {
  name: string;
  email: string;
  application_text: string;
  tier: string;
  source: string;
  submitted_at: string;
}): Promise<void> {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    throw new Error("NOTION_TOKEN is not configured");
  }

  const tierMap: Record<string, string> = {
    Explorer: "Explorer",
    Seeker: "Seeker",
    Oracle: "Oracle",
  };
  const tier = tierMap[payload.tier] ?? "Not specified";

  const body = {
    parent: { database_id: NOTION_DB_ID },
    properties: {
      Name: { title: [{ text: { content: payload.name } }] },
      Email: { email: payload.email },
      Tier: { select: { name: tier } },
      Application: { rich_text: [{ text: { content: payload.application_text } }] },
      Source: { rich_text: [{ text: { content: payload.source } }] },
      Status: { select: { name: "New" } },
      Submitted_At: { rich_text: [{ text: { content: payload.submitted_at } }] },
    },
  };

  const res = await fetch(`${NOTION_API}/pages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Notion API error ${res.status}: ${detail}`);
  }
}

export const applyRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(200),
        email: z.string().email(),
        application_text: z.string().min(50).max(5000),
        tier: z.string().max(100).optional().default("Not specified"),
        source: z.string().max(200).optional().default("lifewoven-marketing-site"),
        submitted_at: z.string().optional().default(() => new Date().toISOString()),
      })
    )
    .mutation(async ({ input }) => {
      await writeToNotion({
        name: input.name,
        email: input.email,
        application_text: input.application_text,
        tier: input.tier,
        source: input.source,
        submitted_at: input.submitted_at,
      });

      // Fire owner notification (best-effort — don't fail the submission if this fails)
      try {
        await notifyOwner({
          title: `New Founding Member Application — ${input.name}`,
          content: `**Name:** ${input.name}\n**Email:** ${input.email}\n**Tier:** ${input.tier}\n**Submitted:** ${input.submitted_at}\n\n**Application:**\n${input.application_text}`,
        });
      } catch (err) {
        console.warn("[apply] Owner notification failed (non-fatal):", err);
      }

      return { success: true } as const;
    }),
});
