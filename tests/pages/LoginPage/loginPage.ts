import BasePage from "../basePage";

export default class LoginPage extends BasePage{
    private readonly userNameField = this.page.locator('[name="username"]');
    private readonly passwordField = this.page.locator('[name="password"]');
    private readonly loginButton = this.page.locator('[type="submit"]');

    async enterUserName(userName :string){
        await this.enterTextToElement(this.userNameField , userName);
    }

    async enterPassword(password :string){
        await this.enterTextToElement(this.passwordField , password);
    }
    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}