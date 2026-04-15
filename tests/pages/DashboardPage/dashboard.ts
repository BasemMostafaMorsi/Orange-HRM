import { Expect, expect } from "@playwright/test";
import BasePage from "../basePage";

export default class DashboardPage extends BasePage
{
    private readonly adminButton = this.page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a');

    private readonly numberOfRecordes = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span').first().textContent();

    private readonly deletButton = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[6]/div/button[1]/i');

    private readonly searchByName = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');

    private readonly searchButton = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    

    async clickAdminButton(){
        await this.clickElement(this.adminButton);
    }

    async fillSearchByName(name:string){
        await this.enterTextToElement(this.searchByName , name)
    }

    async clickOnSearchButton(){
        await this.clickElement(this.searchButton);
    }

    async beforeDelet(){
        
       await this.numberOfRecordes;
    }

    async afterDelet(){
        await this.numberOfRecordes;
    }

    async clickOndeletButton(){
        await this.clickElement(this.deletButton);
    }
    
   
    
      

}