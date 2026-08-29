import { productStatus } from "./product-status";

export const navItems = [
  { href: "/demo", label: "Demo" },
  { href: "/features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/proof", label: "Proof" },
  { href: "/support", label: "Support" },
];

export const productMedia = {
  keyboard: {
    src: "/product/host-keyboard-current.webp",
    alt: "Current SottoKey keyboard inside the Android Contacts app",
  },
  rewriteIdle: {
    src: "/product/live-rewrite-idle.webp",
    alt: "Current SottoKey three-mode rewrite panel on Android",
  },
  rewriteDiff: {
    src: "/product/live-rewrite-diff.webp",
    alt: "Current SottoKey rewrite panel showing a real device diff",
  },
  textEditing: {
    src: "/product/host-text-editing-current.webp",
    alt: "Current SottoKey text editing controls inside Android Contacts",
  },
  tools: {
    src: "/product/host-tools-current.webp",
    alt: "Current SottoKey expanded toolbar inside Android Contacts",
  },
  emoji: {
    src: "/product/host-emoji-current.webp",
    alt: "Current SottoKey local emoji panel",
  },
} as const;

export const liveDemo = {
  input: "teh meeting got moved to 3pm",
  output: "The meeting got moved to 3pm.",
  capturedAt: productStatus.app.capturedAt,
  model: `${productStatus.installedModel.name} · ${productStatus.installedModel.packageVersion} · ${productStatus.installedModel.quant}`,
  frames: [
    {
      id: "write",
      label: "Write",
      kicker: "Start with the thought, not the polish.",
      ...productMedia.keyboard,
    },
    {
      id: "choose",
      label: "Choose",
      kicker: "Fix the error or change the tone.",
      ...productMedia.rewriteIdle,
    },
    {
      id: "review",
      label: "Review",
      kicker: "Compare the edit with your original.",
      ...productMedia.rewriteDiff,
    },
  ],
} as const;

export const productSurfaces = [
  {
    ...productMedia.keyboard,
    label: "Type where you are",
    detail: "Stay in the message, note, form, or document you already opened.",
  },
  {
    ...productMedia.rewriteIdle,
    label: "Choose your edit",
    detail: "Fix mistakes, raise the tone, or make the wording more relaxed.",
  },
  {
    ...productMedia.rewriteDiff,
    label: "Review the difference",
    detail: "Compare every insertion and deletion before you replace the text.",
  },
  {
    ...productMedia.textEditing,
    label: "Edit precisely",
    detail: "Selection, cursor movement, copy, paste, and delete stay close.",
  },
  {
    ...productMedia.tools,
    label: "Keep tools close",
    detail: "Rewrite, text editing, clips, undo, and redo share one toolbar.",
  },
  {
    ...productMedia.emoji,
    label: "Find the right emoji",
    detail: "Recents, categories, and a quick return to typing.",
  },
];

export const featureGroups = [
  {
    eyebrow: "01 / WRITE",
    title: "First, it has to type well.",
    body:
      "SottoKey replaces your Android keyboard, not your writing routine. Local autocorrect, learned words, adaptive hitboxes, emoji, clipboard tools, text editing, and one-handed layouts handle the everyday work.",
    points: [
      "English and Spanish layouts and correction",
      "Local autocorrect and learned words",
      "Glide typing in device validation",
      "No server in the typing path",
    ],
  },
  {
    eyebrow: "02 / REVISE",
    title: "Fix the line, or change its tone.",
    body:
      "Fix cleans up grammar and spelling. Professional makes the wording more formal. Casual relaxes it. Each mode works on a selection or the paragraph around your cursor.",
    points: [
      "Selection or current paragraph",
      "Fix, Professional, and Casual",
      "Checks for changed numbers, links, and negation",
      "Original text stays until you approve",
    ],
  },
  {
    eyebrow: "03 / REVIEW",
    title: "See the edit before it becomes yours.",
    body:
      "Small models sometimes choose the wrong word. SottoKey marks every insertion and deletion, then waits. Keep the original, accept the edit, or undo it immediately.",
    points: [
      "Clear insertion and deletion marks",
      "No replacement before approval",
      "Keep original or accept edit",
      "Undo immediately after applying",
    ],
  },
  {
    eyebrow: "04 / PROTECT",
    title: "No direct app network permission.",
    body:
      "The Android production build requests no INTERNET permission. There is no account, telemetry SDK, cloud model, or remote logging. Password-class fields disable suggestions, learning, rewriting, and clipboard capture.",
    points: [
      "No INTERNET permission",
      "No account or analytics",
      "Typed sentences are not saved automatically",
      "Cloud backup disabled",
    ],
  },
];

export const faqItems = [
  {
    question: "Does SottoKey send what I type to a server?",
    answer:
      "No. The release app has no INTERNET permission, so it cannot open a direct internet socket, and the rewrite model lives on the phone. Google Play Billing uses the Play Store service and receives no typed content. Don't take our word for it—check the permission list yourself.",
  },
  {
    question: "Why does Android show a keyboard warning?",
    answer:
      "Android shows the same generic warning for every third-party keyboard, whatever its actual permissions. SottoKey's answer is structural: the app has no INTERNET permission, local models need no server, and typed text is not supplied to Billing. Check the permission list yourself.",
  },
  {
    question: "Can the model make mistakes?",
    answer:
      "Yes. A small on-device model can pick the wrong word or shift a meaning. That is why nothing is replaced silently: every change is marked, and the edit waits for your approval. SottoKey also checks numbers, URLs, and negation—but your review is the final gate.",
  },
  {
    question: "Does it work in password fields?",
    answer:
      "It still types, and that is all. Suggestions, learning, rewriting, and clipboard capture switch off in fields the host app correctly marks as password-class.",
  },
  {
    question: "How much storage does it use?",
    answer:
      `The current ${productStatus.installedModel.quant} model payload is approximately ${productStatus.installedModel.payload}, plus the keyboard and app. That size is the point: the model sits on your phone, so rewriting needs no server, no account, and no connection. The final Play download size may change before release.`,
  },
  {
    question: "How does rewriting affect battery life?",
    answer:
      "A rewrite runs the local model, so it costs more power than typing. The model runs only when you ask, never in the background while you type. SottoKey does not publish a battery figure yet—the testing is still open, and a guessed number is worse than none.",
  },
  {
    question: "Does it rewrite Spanish?",
    answer:
      "Not yet. The keyboard handles Spanish layouts, dictionaries, and local correction, but the rewrite model is English-focused. SottoKey will claim Spanish rewriting when it earns the claim, not before.",
  },
  {
    question: "Is it available on iPhone?",
    answer:
      "No. SottoKey is an Android keyboard, and the release work is focused there.",
  },
  {
    question: "Can I try arbitrary text on this website?",
    answer:
      "No. A live web rewrite would need a server, and a server is the one thing SottoKey does not have. The demo on this site shows a real rewrite from the model that ships in the app.",
  },
];

export const releaseFacts = {
  appVersion: productStatus.app.version,
  model: productStatus.installedModel.label,
  modelPayload: productStatus.installedModel.payload,
  device: productStatus.performance.device,
  p50: productStatus.performance.p50,
  ttft: productStatus.performance.ttft,
  speed: productStatus.performance.speed,
  measuredAt: productStatus.installedModel.measuredAt,
};

export { productStatus };
