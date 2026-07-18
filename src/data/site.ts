export type DiffToken = {
  text: string;
  kind: "same" | "insert" | "delete";
};

export type DemoCase = {
  id: string;
  mode: "Fix" | "Standard" | "Professional" | "Casual";
  kicker: string;
  input: string;
  output: string;
  diff: DiffToken[];
  totalMs: number;
};

export const navItems = [
  { href: "/demo", label: "Demo" },
  { href: "/features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/proof", label: "Proof" },
  { href: "/support", label: "Support" },
];

export const demoCases: DemoCase[] = [
  {
    id: "fix-slang",
    mode: "Fix",
    kicker: "Correct the error. Keep the voice.",
    input: "ngl that demo was fire, we shipped it b4 the deadline lol",
    output: "ngl that demo was fire, we shipped it before the deadline lol",
    diff: [
      {
        text: "ngl that demo was fire, we shipped it ",
        kind: "same",
      },
      { text: "b4", kind: "delete" },
      { text: "before", kind: "insert" },
      { text: " the deadline lol", kind: "same" },
    ],
    totalMs: 490,
  },
  {
    id: "standard-memory",
    mode: "Standard",
    kicker: "Clearer structure. Same meaning.",
    input:
      "so basically what happened is that the server it crashed because memory",
    output:
      "So basically what happened is that the server crashed because of memory.",
    diff: [
      { text: "s", kind: "delete" },
      { text: "S", kind: "insert" },
      { text: "o basically what happened is that the server ", kind: "same" },
      { text: "it ", kind: "delete" },
      { text: "crashed because ", kind: "same" },
      { text: "of ", kind: "insert" },
      { text: "memory", kind: "same" },
      { text: ".", kind: "insert" },
    ],
    totalMs: 507,
  },
  {
    id: "professional-report",
    mode: "Professional",
    kicker: "Work-ready, without corporate inflation.",
    input:
      "i ate lunch late so im a bit tired, will finish the report by 5",
    output:
      "I ate lunch late, so I'm a bit tired. I'll finish the report by 5.",
    diff: [
      { text: "i", kind: "delete" },
      { text: "I", kind: "insert" },
      { text: " ate lunch late", kind: "same" },
      { text: ",", kind: "insert" },
      { text: " so ", kind: "same" },
      { text: "im", kind: "delete" },
      { text: "I'm", kind: "insert" },
      { text: " a bit tired", kind: "same" },
      { text: ", will", kind: "delete" },
      { text: ". I'll", kind: "insert" },
      { text: " finish the report by 5", kind: "same" },
      { text: ".", kind: "insert" },
    ],
    totalMs: 614,
  },
  {
    id: "casual-late",
    mode: "Casual",
    kicker: "Less formal. Still unmistakably yours.",
    input: "I apologize, but I am running approximately ten minutes late.",
    output: "Sorry, but I'm running about ten minutes late.",
    diff: [
      { text: "I apologize", kind: "delete" },
      { text: "Sorry", kind: "insert" },
      { text: ", but ", kind: "same" },
      { text: "I am", kind: "delete" },
      { text: "I'm", kind: "insert" },
      { text: " running ", kind: "same" },
      { text: "approximately", kind: "delete" },
      { text: "about", kind: "insert" },
      { text: " ten minutes late.", kind: "same" },
    ],
    totalMs: 536,
  },
];

export const productSurfaces = [
  {
    src: "/product/keyboard-dark.webp",
    alt: "SottoKey dark keyboard typing surface on Android",
    label: "The everyday keyboard",
    detail: "Fast typing, suggestions, autocorrect, and adaptive touch targets.",
  },
  {
    src: "/product/rewrite-diff.webp",
    alt: "SottoKey rewrite panel showing colored insertions and deletions",
    label: "A real diff",
    detail: "See what changed before anything touches your text.",
  },
  {
    src: "/product/emoji.webp",
    alt: "SottoKey local emoji panel",
    label: "Emoji, local",
    detail: "Search and recents stay inside the keyboard.",
  },
  {
    src: "/product/text-editing.webp",
    alt: "SottoKey text editing controls",
    label: "Precision editing",
    detail: "Cursor, selection, clipboard, and undo controls where you type.",
  },
  {
    src: "/product/clipboard.webp",
    alt: "SottoKey private clipboard panel",
    label: "Private clipboard",
    detail: "Temporary history in memory, explicit saved snippets on device.",
  },
  {
    src: "/product/keyboard-light.webp",
    alt: "SottoKey light keyboard theme",
    label: "Light, dark, OLED",
    detail: "A complete visual system designed for the keyboard surface.",
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
      "Fix corrects errors. Professional makes a sentence work-ready. Casual relaxes the language. Standard improves clarity without pushing the tone in either direction.",
    points: [
      "One-sentence or selected-text boundary",
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
  appVersion: "0.4.0",
  model: "LFM2.5 · 350M · v3 final · Q8_0",
  modelPayload: "379 MB",
  device: "Redmi K20 Pro · Snapdragon 855",
  p50: "490 ms",
  ttft: "207 ms",
  speed: "28.3 tok/s",
  measuredAt: "14 July 2026",
};
