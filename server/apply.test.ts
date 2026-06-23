/**
 * Tests for the Founding Member Application router.
 *
 * Validates:
 * 1. NOTION_TOKEN env var is present and the Notion API is reachable
 * 2. The apply.submit tRPC procedure writes a row to the Notion database
 *    and returns { success: true }
 */
import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const NOTION_API = "https://api.notion.com/v1";
const NOTION_DB_ID = "a0d9fa1a2c7347fc8c8cba32d9e562dd";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
}

describe("Notion token", () => {
  it("NOTION_TOKEN env var is set", () => {
    expect(process.env.NOTION_TOKEN).toBeTruthy();
  });

  it("Notion API is reachable and token is valid", async () => {
    const token = process.env.NOTION_TOKEN!;
    const res = await fetch(`${NOTION_API}/databases/${NOTION_DB_ID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
      },
    });
    expect(res.status).toBe(200);
  });
});

describe("apply.submit", () => {
  it("writes a test application row to Notion and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.foundingApply.submit({
      name: "Vitest Test User",
      email: "vitest@lifewoven.click",
      application_text:
        "This is an automated test submission from the Lifewoven vitest suite. It should appear in the Notion database with Status = New and can be safely deleted.",
      tier: "Explorer",
      source: "vitest",
      submitted_at: new Date().toISOString(),
    });

    expect(result).toEqual({ success: true });
  }, 15_000); // allow up to 15s for the Notion API call
});
