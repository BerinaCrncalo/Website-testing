import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "/Users/berinnacrncalo/Downloads/website testing/core/configuration/driver-setup.ts";


import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "/Users/berinnacrncalo/Downloads/website testing/core/configuration/page-objects/membership-page.ts";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage : LoginPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.membership);
    loginPage = new LoginPage(driver);
},10000);


test("Membership", async () => {
  await loginPage.provideName();
  await loginPage.provideSurname();
  await loginPage.provideNumber();
  await loginPage.clickSubmitbutton();
},20000)


afterAll(async () => {
    await quitDriver(driver);
},10000);