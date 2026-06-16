// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Example Playwright test suite (runs against https://playwright.dev).
 *
 * Demonstrates the good-practice basics:
 *  - role/text based locators (resilient, accessibility-friendly)
 *  - web-first assertions with expect() (auto-waiting, no manual sleeps)
 *  - navigation, clicking, typing, and asserting page state
 */

test.describe('playwright.dev homepage', () => {
  test('has the expected title and hero heading', async ({ page }) => {
    await page.goto('/');

    // Title contains "Playwright".
    await expect(page).toHaveTitle(/Playwright/);

    // The main hero heading is visible.
    await expect(
      page.getByRole('heading', {
        name: /enables reliable web automation/i,
        level: 1,
      }),
    ).toBeVisible();
  });

  test('"Get started" link navigates to the docs intro', async ({ page }) => {
    await page.goto('/');

    // Click the "Get started" call-to-action.
    await page.getByRole('link', { name: 'Get started' }).click();

    // We land on the installation/intro docs page.
    await expect(page).toHaveURL(/.*docs\/intro/);
    await expect(
      page.getByRole('heading', { name: 'Installation', level: 1 }),
    ).toBeVisible();
  });

  test('top navigation exposes the key sections', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Main' });
    await expect(nav.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'MCP' })).toBeVisible();
  });
});

test.describe('docs search', () => {
  test('search finds "locators" documentation', async ({ page }) => {
    await page.goto('/');

    // Open the search box (button shows "Search").
    await page.getByRole('button', { name: 'Search' }).click();

    // Type a query into the search input.
    const searchBox = page.getByRole('searchbox', { name: /search/i });
    await searchBox.fill('locators');

    // The results dropdown surfaces a matching link.
    await expect(
      page.getByRole('link', { name: /locators/i }).first(),
    ).toBeVisible();
  });
});
