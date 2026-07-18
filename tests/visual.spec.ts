import { expect, test } from "@playwright/test";

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

test("guided demo switches modes and accepts an edit", async ({ page }) => {
  await page.goto("/demo");
  const professional = page
    .getByRole("group", { name: "Rewrite examples" })
    .getByRole("button")
    .filter({ hasText: "Professional" });
  await professional.click();
  await expect(page.getByText("Revising on this device…")).toBeVisible();
  await expect(professional).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".rewrite-card__diff ins").filter({ hasText: "I'm" })).toBeVisible({
    timeout: 3_000,
  });
  await page.getByRole("button", { name: "Accept edit" }).click();
  await expect(page.getByText("Edit accepted.")).toBeVisible();
  await expect(page.locator(".demo-composer p")).toHaveText(
    "I ate lunch late, so I'm a bit tired. I'll finish the report by 5.",
  );
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
    mobileNavigation.getByRole("link", { name: "Get SottoKey", exact: true }),
  ).toBeVisible();
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
});
