import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = (relativePath: string) => readFileSync(resolve(root, relativePath), "utf8");

describe("marketing launch-trust source policy", () => {
  it("uses the current Seeker rate and active-subscription founding-rate language", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    expect(pricing).toContain('monthly: "$9"');
    expect(pricing).toContain("Founding rate while your subscription remains active.");
    expect(pricing).toContain("100 Founding seats.");
    expect(pricing).not.toContain("SLOTS_CLAIMED");
    expect(pricing).not.toContain("seats claimed");
    expect(pricing).not.toContain("for life");
    expect(pricing).not.toContain("application");
  });

  it("uses the canonical survey and Lumen names without a marketing mascot poster image", () => {
    const audit = source("client/src/components/sections/AuditSection.tsx");
    const lumen = source("client/src/components/sections/LuminSection.tsx");
    expect(audit).toContain("Load-Bearing Survey");
    expect(lumen).toContain("Lumen.");
    expect(lumen).not.toContain('<img\n            src="/manus-storage/mascot_poster');
  });

  it("provides a direct, pricing-aware signup path from the persistent header and every membership plan", () => {
    const config = source("client/src/config.ts");
    const nav = source("client/src/components/Nav.tsx");
    const css = source("client/src/index.css");
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    expect(config).toContain('export const SIGNUP_URL = `${APP_URL}/signup?returnTo=/pricing`;');
    expect(nav).toContain("Start free");
    expect(nav).toContain('href={SIGNUP_URL}');
    expect(nav).not.toContain("hidden md:inline-flex");
    expect(css).toMatch(/\.nav\s*\{[\s\S]*?position:\s*fixed/);
    expect(pricing).toContain("function SignupButton");
    expect(pricing).toContain('const signupUrl = planId === "explorer" ? SIGNUP_URL : `${SIGNUP_URL}&tier=${planId}`;');
    expect(pricing).toContain('href={signupUrl}');
    expect(pricing).toContain("By continuing, you agree to Lifewoven");
    expect(pricing).toContain("provided through Manus services");
    expect(pricing).toContain('"Start free"');
    expect(pricing).toContain('"Start Seeker — $9/mo"');
    expect(pricing).toContain('"Start Oracle — $25/mo"');
  });

  it("uses descriptive paid-plan CTAs and keeps browser zoom available", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    const html = source("client/index.html");

    expect(pricing).toContain('"Start free"');
    expect(pricing).toContain('"Start Seeker — $9/mo"');
    expect(pricing).toContain('"Start Oracle — $25/mo"');
    expect(html).not.toContain("maximum-scale");
  });

  it("uses the required five-item navigation and book purchase destinations", () => {
    const nav = source("client/src/components/Nav.tsx");
    const book = source("client/src/components/sections/SocialProofSection.tsx");
    const config = source("client/src/config.ts");
    ["The Method", "The Library", "Pathways", "Membership", "Sign in"].forEach((label) => {
      expect(nav).toContain(`label: "${label}"`);
    });
    expect(nav).not.toContain('label: "6 Dimensions"');
    expect(nav).not.toContain('label: "First Honest Week"');
    expect(config).toContain('https://www.soulengineer.online/books');
    expect(config).toContain('https://a.co/d/0iwd1i2O');
    expect(book).toContain("Paperback on Amazon");
  });

  it("uses guided-script language and the corrected Reset Protocol duration", () => {
    const library = source("client/src/components/sections/LibrarySection.tsx");
    expect(library).toContain("The Reset Protocol");
    expect(library).toContain("30–40 min guided script");
    expect(library).not.toContain("audio session");
    expect(library).not.toContain("45-min audio");
  });

  it("keeps current legal and privacy disclosures", () => {
    const terms = source("client/src/pages/Terms.tsx");
    const privacy = source("client/src/pages/Privacy.tsx");
    expect(terms).toContain("at least 18 years old");
    expect(terms).toContain("eligible for a full refund within 7 days");
    expect(privacy).toContain("Manus Analytics");
    expect(privacy).toContain("adults aged 18 and over");
  });
});
