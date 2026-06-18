// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Demo: passing AND failing assertions side by side.
 *
 * The "PASS" tests assert things that are true on https://playwright.dev.
 * The "FAIL" tests assert things that are false — but each one calls
 * test.fail() first, which tells Playwright the failure is EXPECTED.
 * That way you can see real failing assertions run while CI stays green.
 *
 * Remove test.fail() from any of the failing tests to watch it turn red.
 */

test.describe('assertions that PASS', () => {
  test('title contains "Playwright"', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/); // true -> passes
  });

  test('hero is visible', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { level: 1, name: /enables reliable web automation/i }),
    ).toBeVisible(); // true -> passes
  });

  test('"Get started" link exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible(); // true -> passes
  });
});

test.describe('assertions that FAIL (expected)', () => {
  test('wrong title -> assertion fails', async ({ page }) => {
    test.fail(); // Playwright expects this test to fail
    await page.goto('/');
    await expect(page).toHaveTitle(/Selenium/); // false -> fails as expected
  });

  test('non-existent element -> assertion fails', async ({ page }) => {
    test.fail();
    await page.goto('/');
    await expect(
      page.getByRole('button', { name: 'This button does not exist' }),
    ).toBeVisible(); // never found -> fails as expected
  });

  test('wrong URL after navigation -> assertion fails', async ({ page }) => {
    test.fail();
    await page.goto('/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*some-page-that-does-not-exist/); // false -> fails as expected
  });
});
