import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/demo", "/privacy", "/proof"];

for (const route of routes) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      (violation) =>
        violation.impact === "serious" || violation.impact === "critical",
    );
    expect(
      serious,
      serious
        .map(
          (violation) =>
            `${violation.id}: ${violation.description}\n${violation.nodes
              .map((node) => node.target.join(" "))
              .join("\n")}`,
        )
        .join("\n\n"),
    ).toEqual([]);
  });
}
