class campaignPage {

    get createCampaignLookUpImage(){
        return $("//img[@title='Create Campaign...']")
    }
    async clickOnCampaignLookUpImage(){
        // await this.createContactLookUpImage.waitForDisplayed()
        await this.createCampaignLookUpImage.click()
    }

}

module.exports = new campaignPage()