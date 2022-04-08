class contactPage {

    get createContactLookUpImage(){
        return $("//img[@alt='Create Contact...']")
    }
    async clickOnContactLookUpImage(){
        // await this.createContactLookUpImage.waitForDisplayed()
        await this.createContactLookUpImage.click()
    }
}
module.exports = new contactPage()