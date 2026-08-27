import LegalPage, { LegalSection } from "./LegalPage";

const sections: LegalSection[] = [
  {
    heading: "Using Lifewoven",
    body: [
      "Lifewoven gives you tools for reflection, journaling, and personal practice. By creating an account, you agree to these terms. You must be at least 18 years old to use the service.",
    ],
  },
  {
    heading: "Your account",
    body: [
      "You're responsible for keeping your login credentials secure and for activity that happens under your account. Tell us promptly if you believe your account has been compromised.",
    ],
  },
  {
    heading: "Founding member rates",
    body: [
      "Founding members keep the rate shown at signup while their subscription remains active without interruption, even when public pricing rises. If a subscription lapses or is cancelled, the founding rate may no longer be available on re-subscription.",
      "Lifewoven is currently in closed beta. Features may change, and some described capabilities may be added during the beta period.",
    ],
  },
  {
    heading: "Payments",
    body: [
      "Paid subscriptions are billed in advance on a recurring basis until cancelled. You can cancel at any time; cancellation takes effect at the end of the current billing period. A first paid subscription is eligible for a full refund within 7 days of the initial charge. After that period, payments are non-refundable except where required by law.",
    ],
  },
  {
    heading: "Your content",
    body: [
      "You own what you create in Lifewoven. You grant us only the limited permission needed to store, process, and display your content back to you so the service can function, including optional AI features you choose to use. We do not claim ownership of your journal entries, check-ins, or portraits, and we do not use personal content to train general AI models without your explicit consent.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "Don't misuse the service: no attempting to breach security, disrupt the platform, reverse-engineer it, or use it for unlawful purposes. We may suspend accounts that do.",
    ],
  },
  {
    heading: "Not medical advice",
    body: [
      "Lifewoven supports personal reflection and growth. It is not a substitute for professional medical, psychological, or legal advice. If you are in crisis, please contact a qualified professional or your local emergency services.",
    ],
  },
  {
    heading: "Disclaimers & liability",
    body: [
      "The service is provided \"as is\" during the beta. To the fullest extent permitted by law, Lifewoven is not liable for indirect or consequential damages arising from your use of the service.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms as the product matures. When we make material changes, we'll update the date above and, where appropriate, notify you.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2, 2026"
      intro="These terms cover your use of Lifewoven. We've written them to be readable. If anything is unclear, just ask."
      sections={sections}
    />
  );
}
