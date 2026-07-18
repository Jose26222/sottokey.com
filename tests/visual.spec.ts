import { expect, test } from "@playwright/test";
import { productMedia, productStatus } from "../src/data/site";

async function warmLazyMedia(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    const step = Math.max(500, Math.floor(window.innerHeight * 0.8));
    for (
      let position = 0;
      position < document.body.scrollHeight;
      position += step
    ) {
      window.scrollTo(0, position);
      await new Promise((resolve) => window.setTimeout(resolve, 60));
    }
    await Promise.all(
      Array.from(document.images).map(
        (image) =>
          new Promise<void>((resolve) => {
            if (image.complete) {
              resolve();
              return;
            }
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    );
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  });
  await page.waitForTimeout(250);
}

const routes = [
  "/",
  "/demo",
  "/features",
  "/privacy",
  "/proof",
  "/download",
  "/support",
  "/changelog",
  "/press",
  "/legal/terms",
  "/legal/licenses",
];

for (const route of routes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("guided demo switches through captured device states", async ({ page }) => {
  await page.goto("/demo");
  const guidedDemo = page.locator(".guided-demo").first();
  const sequence = page.getByRole("group", { name: "Correction sequence" });
  const review = sequence
    .getByRole("button")
    .filter({ hasText: "Review" });
  await review.click();
  await expect(review).toHaveAttribute("aria-pressed", "true");
  await expect(
    guidedDemo.getByRole("img", {
      name: productMedia.rewriteDiff.alt,
    }),
  ).toBeVisible();

  await expect(
    sequence.getByRole("button").filter({ hasText: "Write" }),
  ).toBeVisible();
  await expect(
    page.getByText("Your original stays in place until you accept the edit.", {
      exact: false,
    }),
  ).toBeVisible();
});

test("customer demo leads with product value, not artifact construction", async ({
  page,
}) => {
  await page.goto("/demo");

  await expect(
    page.getByRole("heading", { name: "Make the change. See the change." }),
  ).toBeVisible();
  await expect(page.getByText("No cloud rewrite · No account")).toBeVisible();
  await expect(page.locator("body")).not.toContainText(
    /captured product demo|how this demo works|contact sheet|record the current app|device session|connected phone|reconstructed interface/i,
  );
});

test("published product media preserves device geometry and budget", async ({
  page,
  request,
}) => {
  await page.goto("/");

  for (const media of Object.values(productMedia)) {
    const response = await request.get(media.src);
    expect(response.ok(), `${media.src} should load`).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/webp");
    expect((await response.body()).byteLength).toBeLessThanOrEqual(160_000);

    const dimensions = await page.evaluate(
      (src) =>
        new Promise<{ width: number; height: number }>((resolve, reject) => {
          const image = new Image();
          image.onload = () =>
            resolve({
              width: image.naturalWidth,
              height: image.naturalHeight,
            });
          image.onerror = () => reject(new Error(`Unable to load ${src}`));
          image.src = src;
        }),
      media.src,
    );

    expect(dimensions).toEqual({ width: 1080, height: 2340 });
  }
});

test("mobile navigation exposes every core route", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });
  await expect(
    mobileNavigation.getByRole("link", { name: /Privacy/, exact: false }),
  ).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", {
      name: "Google Play status",
      exact: true,
    }),
  ).toBeVisible();
});

test("Google Play destination never invents availability", async ({ page }) => {
  await page.goto("/download");
  const storeCta = page.locator("[data-play-store-cta]");

  await expect(storeCta).toBeVisible();
  if (productStatus.googlePlay.href) {
    await expect(storeCta).toHaveAttribute("href", productStatus.googlePlay.href);
    await expect(storeCta).toHaveText(productStatus.googlePlay.liveLabel, {
      useInnerText: true,
    });
  } else {
    await expect(storeCta).toHaveAttribute("aria-disabled", "true");
    await expect(storeCta).not.toHaveAttribute("href", /.+/);
    await expect(storeCta).toContainText(productStatus.googlePlay.pendingLabel);
  }
});

test("privacy copy distinguishes host-app text from network transmission", async ({
  page,
}) => {
  await page.goto("/privacy");

  await expect(
    page.getByText("Like every keyboard, it exchanges text with the app", {
      exact: false,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Android app: no off-device network path"),
  ).toBeVisible();
  await expect(page.locator("body")).not.toContainText(
    "no data transmitted or shared",
  );
});

test("public pages do not expose a price before launch", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("body")).not.toContainText(/\$\s*\d/);
  }
});

test("capture visual review set", async ({ page }, testInfo) => {
  const isMobile = testInfo.project.name === "mobile";
  await page.goto("/");
  await warmLazyMedia(page);
  await page.screenshot({
    path: `/tmp/sottokey-review/home-${isMobile ? "mobile" : "desktop"}.png`,
    fullPage: true,
  });
  await page.goto("/demo");
  await warmLazyMedia(page);
  await page.screenshot({
    path: `/tmp/sottokey-review/demo-${isMobile ? "mobile" : "desktop"}.png`,
    fullPage: true,
  });
  await page.goto("/features");
  await warmLazyMedia(page);
  await page.screenshot({
    path: `/tmp/sottokey-review/features-${isMobile ? "mobile" : "desktop"}.png`,
    fullPage: true,
  });
});
