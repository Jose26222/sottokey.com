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
      kicker: "Write in the app you already use.",
      ...productMedia.keyboard,
    },
    {
      id: "choose",
      label: "Choose",
      kicker: "Pick Fix, Pro, or Casual.",
      ...productMedia.rewriteIdle,
    },
    {
      id: "review",
      label: "Review",
      kicker: "Inspect the real insertion and deletion.",
      ...productMedia.rewriteDiff,
    },
  ],
} as const;

export const productSurfaces = [
  {
    ...productMedia.keyboard,
    label: "Write in any app",
    detail: "The current keyboard, toolbar, and host-app integration on Android.",
  },
  {
    ...productMedia.rewriteIdle,
    label: "Choose the rewrite",
    detail: "Fix, Professional, and Casual are the three current rewrite modes.",
  },
  {
    ...productMedia.rewriteDiff,
    label: "Review a real diff",
    detail: "A measured installed-model result, captured directly from the phone.",
  },
  {
    ...productMedia.textEditing,
    label: "Edit precisely",
    detail: "Selection, navigation, copy, paste, and delete stay within reach.",
  },
  {
    ...productMedia.tools,
    label: "Tools, one tap away",
    detail: "Rewrite, editing, clips, undo, and redo share one compact toolbar.",
  },
  {
    ...productMedia.emoji,
    label: "Emoji, local",
    detail: "Current recents, categories, and keyboard return controls.",
  },
];

export const featureGroups = [
  {
    eyebrow: "01 / WRITE",
    title: "A keyboard first.",
    body:
      "SottoKey does not ask you to leave the app, paste into a chatbot, or change how you write. It is a serious Android keyboard with local autocorrect, learned words, adaptive hitboxes, emoji, clipboard, text editing, and one-handed layouts.",
    points: [
      "English and Spanish typing",
      "Local autocorrect and learned words",
      "Glide typing and adaptive hitboxes",
      "No typing path through a server",
    ],
  },
  {
    eyebrow: "02 / REVISE",
    title: "Three precise ways to revise.",
    body:
      "Fix corrects errors. Professional makes a passage work-ready. Casual relaxes the language. The current app exposes exactly these three rewrite modes.",
    points: [
      "Current paragraph or explicit selection",
      "Deterministic mode contract",
      "Protected spans and validation",
      "Original text remains until acceptance",
    ],
  },
  {
    eyebrow: "03 / REVIEW",
    title: "Proofreading, not magic.",
    body:
      "The model can be wrong. SottoKey makes that visible. Deletions, insertions, Keep original, Accept edit, and Undo edit keep the final decision with the writer.",
    points: [
      "Readable insert and delete marks",
      "No silent full-sentence replacement",
      "Explicit human acceptance",
      "Immediate undo after applying",
    ],
  },
  {
    eyebrow: "04 / PROTECT",
    title: "Privacy enforced by Android.",
    body:
      "The release app has no INTERNET permission. No account, no telemetry SDK, no cloud model, no remote logs. Password-class fields disable intelligence at the keyboard boundary.",
    points: [
      "No INTERNET permission",
      "No analytics or account",
      "No automatic text persistence",
      "Cloud backup disabled",
    ],
  },
];

export const faqItems = [
  {
    question: "Does SottoKey send what I type to a server?",
    answer:
      "No. The Android app requests no internet permission, and rewriting runs with a model packaged for the phone. The website demo uses pre-recorded, verified outputs and does not accept your text.",
  },
  {
    question: "Why does Android show a keyboard warning?",
    answer:
      "Android shows the same generic warning when enabling any third-party keyboard. SottoKey's answer is structural: the release app does not have permission to access the internet.",
  },
  {
    question: "Can the model make mistakes?",
    answer:
      "Yes. Small on-device models can change wording incorrectly. SottoKey shows a diff and requires explicit acceptance. Numbers, URLs, negations, and other protected content are also validated.",
  },
  {
    question: "Does it work in password fields?",
    answer:
      "The keyboard still types, but suggestions, learning, rewrite, and clipboard capture are disabled in fields correctly marked as password-class by the host app.",
  },
  {
    question: "How much storage does it use?",
    answer:
      "The current bundled Q8 model payload is approximately 379 MB, plus the keyboard runtime and app. Distribution details may change before the public Play release.",
  },
  {
    question: "Does rewriting drain the battery?",
    answer:
      "The model runs only when you request a rewrite, never continuously while typing. Battery-per-rewrite and sustained thermal behavior remain part of the device validation plan.",
  },
  {
    question: "Is it available on iPhone?",
    answer:
      "No. SottoKey is currently an Android keyboard. The architecture and release work are focused on Android.",
  },
  {
    question: "Can I try arbitrary text on this website?",
    answer:
      "Not at launch. A server demo would send text over the network and blur the product's privacy story. The guided demo instead uses outputs generated by the real release model.",
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
