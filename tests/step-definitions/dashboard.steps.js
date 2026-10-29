
import {
  Given,
  When,
  Then,
  After,
  Status,
  setDefaultTimeout
} from '@cucumber/cucumber';

import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { enterLoginDetails, clickLoginButton } from '../helpers/login.helper.js';

setDefaultTimeout(15000);

// Override BASE_URL only when the application runs on a different port.
const baseURL = process.env.BASE_URL || 'http://localhost:5173/';
const loginURL = new URL('/login', baseURL).href;
const dashboardURL = new URL('/', baseURL).href;

Given('the user opens the monitoring application', async function () {
  // Cucumber gives each scenario its own World (this), keeping browser state separate.
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 700
  });
  this.page = await this.browser.newPage();
  await this.page.goto(loginURL);
});

Then('the application page should be visible', async function () {
  await this.page.getByRole('heading', {
    name: 'Bell Pepper Monitor'
  }).waitFor({ state: 'visible' });

  await this.page.locator('#auth-email').waitFor({ state: 'visible' });
  await this.page.locator('#auth-password').waitFor({ state: 'visible' });
  await this.page.locator('#auth-submit-btn').waitFor({ state: 'visible' });

  assert.equal(
    await this.page.locator('#auth-submit-btn').innerText(),
    'Log in'
  );
});

When('the user enters valid email and password', async function () {
  // Demo mode: this checks the UI flow, not real authentication security.
  await enterLoginDetails(this.page, 'qa@example.com', 'Test123!');
});

When('the user clicks the login button', async function () {
  await clickLoginButton(this.page);
});

Then('the user should be redirected to the dashboard', async function () {
  await this.page.waitForURL(dashboardURL);
  assert.equal(new URL(this.page.url()).pathname, '/');
});

When('the user enters an invalid email format', async function () {
  await enterLoginDetails(this.page, 'invalid-email', 'Test123!');
});

Then('the browser should prevent form submission', async function () {
  const form = this.page.locator('form');
  const validation = await form.evaluate(element => ({
    noValidate: element.noValidate,
    isValid: element.checkValidity()
  }));

  assert.equal(validation.noValidate, false);
  assert.equal(validation.isValid, false);
  // Native validation focuses the first invalid field after clicking Submit.
  await expect(this.page.locator('#auth-email')).toBeFocused();
  await expect(this.page).toHaveURL(loginURL);
});

When('the user leaves email and password empty', async function () {
  await enterLoginDetails(this.page, '', '');
});

Then('both login fields should be required', async function () {
  for (const selector of ['#auth-email', '#auth-password']) {
    const input = this.page.locator(selector);
    await expect(input).toHaveValue('');
    const validation = await input.evaluate(element => ({
      required: element.required,
      valueMissing: element.validity.valueMissing
    }));
    assert.equal(validation.required, true);
    assert.equal(validation.valueMissing, true);
  }
});

Then('the password field should be masked', async function () {
  await expect(this.page.locator('#auth-password')).toHaveAttribute('type', 'password');
});

Then('the login button should be visible and enabled', async function () {
  const button = this.page.locator('#auth-submit-btn');
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await expect(button).toHaveText('Log in');
});

After(async function ({ result, pickle }) {
  const failed = result?.status === Status.FAILED;

  if (failed) {
    try {
      if (this.page && !this.page.isClosed()) {
        const directory = path.resolve('reports', 'screenshots');
        await mkdir(directory, { recursive: true });
        // Use Windows-safe names, with a unique suffix to avoid overwriting failures.
        const scenarioName = (pickle?.name || 'scenario')
          .replace(/[^a-zA-Z0-9_-]+/g, '-')
          .slice(0, 80);
        const filename = `${scenarioName}-${Date.now()}-${randomUUID().slice(0, 8)}.png`;
        const screenshot = await this.page.screenshot({
          path: path.join(directory, filename),
          fullPage: true,
          timeout: 5000
        });
        await this.attach(screenshot, 'image/png');
      }
    } catch (error) {
      // Screenshot or attachment errors must not replace the scenario's failure.
      console.warn('Could not capture or attach the failure screenshot:', error.message);
    }
  }

  try {
    if (this.page && !this.page.isClosed()) {
      await this.page.waitForTimeout(3000);
    }
  } catch (error) {
    console.warn('Could not keep the page open for observation:', error.message);
  }

  try {
    if (this.browser) {
      await this.browser.close();
    }
  } catch (error) {
    if (!failed) throw error;
    console.warn('Could not close the browser after the failure:', error.message);
  } finally {
    this.browser = undefined;
    this.page = undefined;
  }
});
// Temporary test — keep this OUTSIDE the After hook
Then('a deliberately failing test should fail', async function () {
  assert.equal(
    true,
    false,
    'Intentional failure to test screenshot capture'
  );
});
