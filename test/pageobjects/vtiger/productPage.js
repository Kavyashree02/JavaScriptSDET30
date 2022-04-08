class productPage {

    get createProductLookUpImage(){
        return $("//img[@title='Create Product...']")
    }
    async clickOnProductLookUpImage(){
        // await this.createContactLookUpImage.waitForDisplayed()
        await this.createProductLookUpImage.click()
    }
}
module.exports = new productPage()