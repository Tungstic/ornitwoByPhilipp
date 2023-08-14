import { expect, test } from '@playwright/test';

test('copy to clipboard', async ({ page }) => {
  await page.goto('http://localhost:3000/report/login');

  await expect(
    page.getByRole('heading', {
      name: 'ornitwo',
    }),
  ).toBeVisible();

  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  await page.getByLabel('Username:').fill('cheekychipper');

  await page.getByLabel('Password:').fill('cheeky');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(3000);

  await expect(page).toHaveURL('http://localhost:3000/report');

  await page.goto('http://localhost:3000/explore/birdlist');

  await page
    .locator('div')
    .filter({ hasText: /^House SparrowPasser domesticuscopy$/ })
    .getByRole('button', { name: 'copy' })
    .click();

  const copiedText = await page.evaluate('navigator.clipboard.readText()');
  expect(copiedText).toContain('house sparrow');
});
