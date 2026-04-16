import { expect, test } from "../fixtures/fixture";
import LoginPage from './pages/LoginPage/loginPage';
import * as testData from './TestData/testData.json';


test.describe('suite 1', ()=>{
    test.beforeEach(async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

test.afterEach(async ({page})=>{
    await page.close();
})

test('E2E Test', async ({page, loginPage , dashboardPage, admin})=>{

    await loginPage.enterUserName(testData.username);
    await loginPage.enterPassword(testData.password);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
    await loginPage.tackScreenshot('./tests/screenshots/newloginPage.png');
    await dashboardPage.clickAdminButton();
    await page.waitForTimeout(3000);
    await dashboardPage.tackScreenshot('./tests/screenshots/numper.png');
    await admin.alickAddButton();

    await admin.clickOnUserRole();
    await admin.clickchoiseUserRole();

    await admin.clickOnStatus();
    await admin.clickOnSelectStatus();

    await admin.clickOnStatus();
    await admin.clickOnSelectStatus();

    await admin.fillEmployName(testData.adminEmployName);
    await admin.selectTheEmployName();
    await admin.fillUserName(testData.adminUserName);

    await admin.fillPassword(testData.adminPassword);
    await admin.fillConfirmPassword(testData.adminPassword)

    await page.waitForTimeout(3000);
    await admin.clickOnSaveButton();
})

test('Delete the user', async ({page, loginPage , dashboardPage, admin})=>{

    await loginPage.enterUserName(testData.username);
    await loginPage.enterPassword(testData.password);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
    await loginPage.tackScreenshot('./tests/screenshots/newloginPage.png');
    await dashboardPage.clickAdminButton();
    await page.waitForTimeout(3000);
    await dashboardPage.tackScreenshot('./tests/screenshots/numper.png');
    await dashboardPage.beforeDelet();
    await dashboardPage.clickOndeletButton();
    await dashboardPage.afterDelet();
    expect(dashboardPage.beforeDelet()).not.toBe(dashboardPage.afterDelet());
    
    
})

test('Search By UserName', async ({page, loginPage , dashboardPage, admin})=>{

    await loginPage.enterUserName(testData.username);
    await loginPage.enterPassword(testData.password);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
    await loginPage.tackScreenshot('./tests/screenshots/newloginPage.png');
    await dashboardPage.clickAdminButton();
    await page.waitForTimeout(3000);
    await dashboardPage.tackScreenshot('./tests/screenshots/numper.png');
    
    await dashboardPage.fillSearchByName(testData.adminUserName);
    await dashboardPage.clickOnSearchButton();
    
    
})

})
