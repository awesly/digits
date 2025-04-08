import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Admin Pages', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Next.js Application Template' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Contact' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'List Contact' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'admin@foo.com' })).toBeVisible();
  await page.getByRole('link', { name: 'Add Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Add Contact' })).toBeVisible();
  await page.getByRole('link', { name: 'List Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('heading', { name: 'List Contact Admin' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'List Users Admin' })).toBeVisible();
});
