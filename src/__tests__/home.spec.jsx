import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Airtable timeline/);
});

test("should be render page header", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("h1")).toHaveText("Timeline");
  await expect(page.locator("p")).toHaveText(
    "A visual representation of tasks."
  );
  await expect(page.locator("button")).toHaveText("Add Task");
});

test("should render timeline", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#timeline")).toBeVisible();
});
