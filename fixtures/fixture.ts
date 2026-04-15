import{test as baseTest} from '@playwright/test';

import LoginPage from '../tests/pages/LoginPage/loginPage';
import DashboardPage from '../tests/pages/DashboardPage/dashboard';
import Admin from '../tests/pages/AdminPage/admin';
type pages = {
    loginPage : LoginPage;
    dashboardPage:DashboardPage;
    admin:Admin
   // productPage : ProductPage;
}

const testPages = baseTest.extend<pages>({
    loginPage : async ({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboardPage : async ({page},use)=>{
        await use(new DashboardPage(page));
    },
    admin: async({page},use)=>{
        await use(new Admin(page))
    }

})

export const test = testPages;
export const expect = testPages.expect;