import LegalPage, { LegalSection } from "./LegalPage";

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "When you create an account, we collect the information you give us directly, including your name, email address, and the membership tier you choose.",
      "When you use the Lifewoven app, we store the content you create — journal entries, daily check-ins, survey responses, and your Woven Self portraits — so that the practice works for you over time. Optional personalization responses may include self-described patterns around attention, overwhelm, time perception, or energy; they are not diagnoses.",
      "We also collect basic technical information automatically, such as device type, browser, and general usage patterns, to keep the service secure and to improve it.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your information to provide and personalize the Lifewoven experience, to respond to support requests, to send you important account and service messages, and to improve our tools. We may process content in optional AI features you choose to use, but we do not use personal content to train general AI models without your explicit consent.",
      "We do not sell your personal information, and we do not share your journal entries, check-ins, or portraits with advertisers or third parties for their own marketing.",
    ],
  },
  {
    heading: "How it's stored",
    body: [
      "Your data is stored on encrypted servers. We use industry-standard safeguards to protect it in transit and at rest. During the closed beta, access is limited to the small team operating the service.",
    ],
  },
  {
    heading: "Service providers",
    body: [
      "We rely on a limited set of trusted vendors — for example, Manus Analytics (usage measurement and product performance), hosting, email delivery, and payment processing — who process data on our behalf under confidentiality obligations. They may only use your data to provide their service to us.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can access, correct, export, or delete your account data at any time by emailing <a href=\"mailto:dewayne@lifewoven.click\" style=\"color:var(--lw-amber);text-decoration:none\">dewayne@lifewoven.click</a>. You can unsubscribe from non-essential emails using the link in any message.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Lifewoven is intended for adults aged 18 and over. It is not directed to children, and we do not knowingly collect their personal information.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update this policy as the product evolves. When we make material changes, we'll update the date above and, where appropriate, notify you directly.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2, 2026"
      intro="Lifewoven is a private space for inner work. This policy explains what we collect, how we use it, and the choices you have. We keep it short and plain on purpose."
      sections={sections}
    />
  );
}
