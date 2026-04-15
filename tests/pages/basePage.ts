import{Expect, Locator , Page, expect} from '@playwright/test'
export default class BasePage{
    protected readonly page: Page;
    constructor (page : Page){
        this.page = page;
    }
    protected async clickElement(element :Locator){
        await element.click();
    }

    protected async enterTextToElement(element :Locator , text :string){
        await element.fill(text);
    }

    public async tackScreenshot(fillPath :string){
        await this.page.screenshot({path:fillPath})
    }

    


}