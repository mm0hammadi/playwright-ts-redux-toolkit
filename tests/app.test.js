// @ts-check

import { test, expect } from '@playwright/test';

test.describe('todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(300);
    await page.locator('[aria-label="new task"]').first().type('hello');
    await page.keyboard.press('Enter');
    expect(await page.$('input[value="hello"]')).not.toBeNull();
  });

  test('add task', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');
    expect(await page.$('input[value="new task"]')).not.toBeNull();
  });

  test('complete task', async ({ page }) => {
    await page.locator('.form-check-input').first().check();
    expect(await page.$('input[disabled]')).not.toBeNull();
  });

  test('delete task', async ({ page }) => {
    await page.locator('input[value="hello"]').hover();
    await page.locator('.btn-danger').first().click();
    expect(await page.$('input[value="hello"]')).toBeNull();
  });

  test('update task', async ({ page }) => {
    await page.locator('input[value="hello"]').fill('new task');
    expect(await page.$('input[value="new task"]')).not.toBeNull();
  });

  test('add task less 3 characters', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('ta');
    await page.keyboard.press('Enter');
    expect(await page.$('.invalid-feedback')).not.toBeNull();
  });

  test('tasks left', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');
    await expect(page.locator('[aria-label="tasks left"]')).toContainText('2 items left');
  });

  test('clear completed', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');

    await page.locator('.form-check-input').first().check();
    await page.locator('.form-check-input').locator('nth=1').check();

    expect(await page.$('input[value="hello"]')).not.toBeNull();
    expect(await page.$('input[value="new task"]')).not.toBeNull();

    await page.locator('text=Clear completed').first().click();

    expect(await page.$('input[value="hello"]')).toBeNull();
    expect(await page.$('input[value="new task"]')).toBeNull();
  });

  test('show only active tasks', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');

    await page.locator('.form-check-input').first().check();
    await page.locator('text=Active').first().click();

    expect(await page.$('input[value="hello"]')).toBeNull();
  });

  test('show only completed tasks', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');

    await page.locator('.form-check-input').first().check();
    await page.locator('text=Completed').first().click();

    expect(await page.$('input[value="hello"]')).not.toBeNull();
    expect(await page.$('input[value="new task"]')).toBeNull();
  });

  test('show all tasks', async ({ page }) => {
    await page.locator('[aria-label="new task"]').first().type('new task');
    await page.keyboard.press('Enter');

    await page.locator('.form-check-input').first().check();
    await page.locator('text=Completed').first().click();

    expect(await page.$('input[value="hello"]')).not.toBeNull();
    expect(await page.$('input[value="new task"]')).toBeNull();

    await page.locator('text=All').first().click();
    expect(await page.$('input[value="new task"]')).not.toBeNull();
  });
});
