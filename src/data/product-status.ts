export const productStatus = {
  lastReviewed: "18 July 2026",
  releaseStage: "Private device beta",
  availability: "Not yet available on Google Play",
  googlePlay: {
    href: null as string | null,
    liveLabel: "View on Google Play",
    pendingLabel: "Google Play listing not yet public",
  },
  requirements: {
    android: "Android 8.0 or later",
    architecture: "64-bit ARM",
  },
  app: {
    version: "0.4.0",
    versionCode: 7,
    state: "Current device build",
    capturedAt: "18 July 2026",
    captureDevice: "Redmi K20 Pro · Android 16",
  },
  installedModel: {
    name: "SottoKey v3 Final",
    packageVersion: "3.0.1",
    label: "LFM2.5 · 350M · v3 final · Q8_0",
    payload: "379 MB",
    quant: "Q8_0",
    state: "Installed evidence model",
    measuredAt: "14 July 2026",
    qualityGate: "6 of 8 hard gates passed",
    qualityNote:
      "The installed v3 model shipped under a documented exception. Meaning preservation and Spanish identity remain below their release gates, so every rewrite still requires review.",
  },
  nextModel: {
    state: "In evaluation",
    note:
      "A replacement model is being evaluated. It is not shown, benchmarked, or described as current until it is packaged and measured in the app.",
  },
  performance: {
    device: "Redmi K20 Pro · Snapdragon 855",
    p50: "490 ms",
    ttft: "207 ms",
    speed: "28.3 tok/s",
  },
} as const;
