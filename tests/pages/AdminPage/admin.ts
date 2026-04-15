import BasePage from "../basePage";

export default class Admin extends BasePage{
    private readonly addButton = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button');

    private readonly userRole = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div');
    private readonly choseUserRole = this.page.getByRole('option', { name: 'Admin' });

    private readonly status = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[1]');
    private readonly selectStatus = this.page.getByRole('option' , {name: 'Enabled'});

    private readonly password = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input');

    private readonly employName = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input');
    private readonly selectEmployName = this.page.getByRole('option', {name :'Charles  Carter'})

    private readonly userName = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input');

    private readonly confirmPassword = this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input');

    private readonly saveButton = this.page.locator('[type="submit"]');


    async alickAddButton(){
        await this.clickElement(this.addButton);
    }

    async clickOnUserRole(){
        await this.clickElement(this.userRole);
    }
    async clickchoiseUserRole(){
        await this.clickElement(this.choseUserRole);
    }

    async clickOnStatus(){
        await this.clickElement(this.status);
    }

    async clickOnSelectStatus(){
        await this.clickElement(this.selectStatus);
    }

    async fillPassword(password:string){
        await this.enterTextToElement(this.password,password)
    }

    async fillConfirmPassword(confirmPassword:string){
        await this.enterTextToElement(this.confirmPassword  , confirmPassword)
    }

    async fillEmployName (employName:string){
        await this.enterTextToElement(this.employName , employName)
    }
    async selectTheEmployName(){
        await this.clickElement(this.selectEmployName);
    }

    async fillUserName (userName:string){
        await this.enterTextToElement(this.userName ,userName)
    }

    async clickOnSaveButton(){
        await this.clickElement(this.saveButton)
    }
}