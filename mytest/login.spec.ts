/* 
https://naveenautomationlabs.com/opencart/index.php?route=account/login

pwtest@opencart.com
playwright@123

Open Browser (chrome/chromium/firefox/webkit)
Open Page
Enter URL: https://naveenautomationlabs.com/opencart/index.php?route=account/login
Create three locators: username, password, loginbutton
Enter username
Enter password
Click on Login button
Get the home page title
Verify the title
take screenshot
Close Browser
*/

import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("login test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const emailId: Locator = await page.locator("#input-email");
  const password: Locator = await page.locator("#input-password");
  const loginButon: Locator = await page.locator("[value='Login']");

  await emailId.fill("pwtest@opencart.com");
  await password.fill("playwright@123");
  await loginButon.click();

  const title = await page.title();
  console.log("Homepage title: ", title);

  await page.screenshot({ path: "homepage.png" });

  expect(title).toEqual("Account Login");

  await browser.close();
});
