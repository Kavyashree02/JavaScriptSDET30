class organizationPage {

    get createOrgLookUpImage(){
        return $("//img[@alt='Create Organization...']")
    }
    async clickOnOrgLookUpImage(){
       await this.createOrgLookUpImage.waitForDisplayed()
        await this.createOrgLookUpImage.click()
    }
}
module.exports = new organizationPage()