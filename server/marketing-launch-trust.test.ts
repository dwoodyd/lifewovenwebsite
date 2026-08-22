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

  it("keeps a clear account-first door beside the account-free survey path", () => {
    const audit = source("client/src/components/sections/AuditSection.tsx");
    expect(audit).toContain('import { AUDIT_URL, SIGNIN_URL } from "../../config"');
    expect(audit).toContain("Take me into the app →");
    expect(audit).toContain("href={SIGNIN_URL}");
    expect(audit).toContain("your completed reading follows you into Lifewoven");
  });

  it("uses the current app login URL for the free path", () => {
    const config = source("client/src/config.ts");
    expect(config).toContain('export const SIGNIN_URL = `${APP_URL}/login`;');
  });

  it("makes the instant free path and self-serve paid founding path explicit", () => {
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    const config = source("client/src/config.ts");
    const nav = source("client/src/components/Nav.tsx");
    const home = source("client/src/pages/Home.tsx");
    expect(pricing).toContain('import { SIGNIN_URL, SIGNUP_URL } from "../../config"');
    expect(config).toContain('export const SIGNUP_URL = `${APP_URL}/signup`;');
    expect(pricing).toContain("Start free — instant");
    expect(pricing).toContain("Claim your founding seat");
    expect(pricing).toContain("Claim a Founding Seat.");
    expect(pricing).toContain("Start free, then choose your tier.");
    expect(pricing).toContain("Founding Member · {TOTAL_SLOTS} seats · {SLOTS_CLAIMED} claimed");
    expect(pricing).toContain("const SLOTS_CLAIMED = 27;");
    expect(pricing).toContain("Founding rate while your subscription remains active.");
    expect(pricing).not.toContain("30% off all standalone library products");
    expect(pricing).not.toContain("Apply for paid founding access");
    expect(pricing).not.toContain("Apply for a Founding Seat");
    expect(pricing).not.toContain("Apply for Founding Member access");
    expect(pricing).not.toContain("We review every application");
    expect(pricing).not.toContain("48 hours");
    expect(nav).toContain("The Method");
    expect(nav).toContain("Membership");
    expect(home).toContain("<WovenGallerySection />");
    expect(home).toContain("<PathwaysSection />");
  });

  it("prioritizes F-03 by withdrawing only recording claims while preserving verified PDFs and $607 pricing", () => {
    const library = source("client/src/components/sections/LibrarySection.tsx");
    const pricing = source("client/src/components/sections/PricingSection.tsx");
    const hero = source("client/src/components/sections/HeroSection.tsx");

    for (const content of [library, pricing, hero]) {
      expect(content).not.toContain("Reset Audio");
      expect(content).not.toContain("45-min audio");
      expect(content).not.toContain("7 audio sessions");
    }

    expect(library).toContain("The Reset Protocol");
    expect(library).toContain("45-min guided script");
    expect(library).toContain("Workbook PDF · 30 days");
    expect(library).toContain("Workbook PDF");
    expect(library).toContain("7 narrated scripts");
    expect(library).toContain("Digital Card Deck PDF");
    expect(library).toContain("every guided script");
    expect(library).toContain("$607");
    expect(pricing).toContain("$607");
    expect(pricing).toContain("The complete nine-product Library — $607 retail value, included");
    expect(hero).toContain("$607");
  });

  it("gives book readers direct purchase access without adding another survey path", () => {
    const book = source("client/src/components/sections/SocialProofSection.tsx");

    expect(book).toContain('href="https://www.soulengineer.online/books"');
    expect(book).toContain("Get the book →");
    expect(book).toContain('href="https://a.co/d/0iwd1i2O"');
    expect(book).toContain("Paperback on Amazon →");
    expect(book).toContain("Already have the book? Start with The First Honest Week. ›");
    expect(book).toContain("href={AUDIT_URL}");
    expect(book).not.toContain("Don’t have it yet? Start with the Load-Bearing Survey.");
  });

  it("distinguishes the six dimensions of the self from the five 5S working dimensions", () => {
    const library = source("client/src/components/sections/LibrarySection.tsx");
    const dimensions = source("client/src/components/sections/SixDimensionsSection.tsx");
    const book = source("client/src/components/sections/SocialProofSection.tsx");

    expect(library).toContain("working across its five dimensions");
    expect(dimensions).toContain("The Six Dimensions of the Self");
    expect(dimensions).toContain("Six dimensions of the self.");
    expect(dimensions).toContain("The 5S is how you work on them");
    expect(book).toContain("The six dimensions of the self.");
  });

  it("does not direct visitors to unavailable standalone Library purchases or discounts", () => {
    const library = source("client/src/components/sections/LibrarySection.tsx");

    expect(library).not.toContain("SHOP_URL");
    expect(library).not.toContain("Browse standalone");
    expect(library).not.toContain("You can also buy any product standalone");
    expect(library).not.toContain("Seekers save 30%");
    expect(library).toContain("Combined retail value: $607, included.");
    expect(library).toContain("retail value");
  });

  it("keeps the Reset product-platform card aligned with its Audio Scripts PDF delivery", () => {
    const product = source("references/product-platform/reset-audio.html");
    const correctedCard = product.split("const CORRECTED_CARD = `")[1]?.split("`;\n\nLESSONS[0]")[0] ?? "";

    expect(product).toContain("<title>The Reset Protocol — Lifewoven</title>");
    expect(product).toContain("Audio Scripts PDF · $27");
    expect(product).toContain("45-Minute Guided Script · 7 Steps");
    expect(product).toContain("LESSONS[0] = {");
    expect(product).toContain("LESSONS.map(lesson=>lesson.body)");
    expect(product).toContain('a.download="the-reset-protocol.md"');
    expect(correctedCard).toContain("No recording is included.");
    expect(correctedCard).not.toContain("AI-voiced");
    expect(correctedCard).not.toContain("guided audio recording");
    expect(correctedCard).not.toContain("narrated by an AI");
  });

  it("keeps the required book-to-practice sections in builder-brief order", () => {
    const home = source("client/src/pages/Home.tsx");
    const order = [
      "<FiveThreadsSection />",
      "<SixDimensionsSection />",
      "<GroundSection />",
      "<VaultSection />",
      "<FirstHonestWeekSection />",
      "<WovenGallerySection />",
      "<AuditSection />",
      "<AppPreviewSection />",
      "<LumenSection />",
      "<SocialProofSection />",
      "<LibrarySection />",
      "<PathwaysSection />",
      "<PricingSection />",
    ];

    let previous = -1;
    for (const section of order) {
      const position = home.indexOf(section);
      expect(position).toBeGreaterThan(previous);
      previous = position;
    }
  });
});
