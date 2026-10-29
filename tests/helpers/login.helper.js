export async function enterLoginDetails(page, email, password) {
  await page.locator('#auth-email').fill(email);
  await page.locator('#auth-password').fill(password);
}

export async function clickLoginButton(page) {
  await page.locator('#auth-submit-btn').click();
}
