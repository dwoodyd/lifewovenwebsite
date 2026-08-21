import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = (relativePath: string) => readFileSync(resolve(root, relativePath), "utf8");

describe("marketing launch-trust source policy", () => {
  it("uses the same founding Seeker rate and honest annual comparison as the app", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    expect(pricing).toContain('{annualToggle ? "$89" : "$9"}');
    expect(pricing).toContain("save 17–18% vs monthly");
    expect(pricing).not.toContain("save ~47%");
    expect(pricing).not.toContain("Locked at the founding rate for life.");
  });

  it("uses unified adult age, refund, AI-content, and analytics disclosures", () => {
    const terms = source("client/src/pages/Terms.tsx");
    const privacy = source("client/src/pages/Privacy.tsx");
    expect(terms).toContain("at least 18 years old");
    expect(terms).toContain("eligible for a full refund within 7 days");
    expect(terms).toContain("without your explicit consent");
    expect(privacy).toContain("Manus Analytics");
    expect(privacy).toContain("attention, overwhelm, time perception, or energy");
    expect(privacy).toContain("adults aged 18 and over");
  });

  it("uses the canonical survey and Lumen names and does not stack a marketing mascot poster image", () => {
    const nav = source("client/src/components/Nav.tsx");
    const audit = source("client/src/components/sections/AuditSection.tsx");
    const lumen = source("client/src/components/sections/LuminSection.tsx");
    expect(nav).toContain("Load-Bearing Survey");
    expect(audit).toContain("Load-Bearing Survey");
    expect(lumen).toContain("Lumen.");
    expect(lumen).not.toContain("<img\n            src=\"/manus-storage/mascot_poster");
  });

  it("keeps the honeypot out of the rendered layout and uses the current app login URL", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    const config = source("client/src/config.ts");
    expect(pricing).toContain('style={{ display: "none" }}');
    expect(config).toContain('export const SIGNIN_URL = `${APP_URL}/login`;');
  });

  it("makes the instant free path and reviewed paid founding path explicit", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    const nav = source("client/src/components/Nav.tsx");
    const home = source("client/src/pages/Home.tsx");
    expect(pricing).toContain('import { SIGNIN_URL } from "../../config"');
    expect(pricing).toContain("Start free — instant");
    expect(pricing).toContain("Apply for paid founding access — 48hr review");
    expect(nav).toContain("The Method");
    expect(nav).toContain("Membership");
    expect(home).not.toContain("<WovenGallerySection />");
    expect(home).not.toContain("<PathwaysSection />");
  });
});
