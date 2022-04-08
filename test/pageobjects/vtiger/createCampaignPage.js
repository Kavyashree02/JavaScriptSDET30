class createCampaignPage {
    
    get campaignNameText () {
        return $("//input[@name='campaignname']");
    }

    get productLookUpImg(){
        return $("//img[@title='Select']")
    }

    get searchText(){
        return $("#search_txt")
    }

    get searchBtn(){
        return $("//input[@name='search']")
    }
    
    get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createNewCampaign(campName, prodName){
        await this.campaignNameText.waitForDisplayed()
        await this.campaignNameText.setValue(campName)
        await this.productLookUpImg.click()
        await browser.switchWindow("Products")
        await this.searchText.setValue(prodName)
        await this.searchBtn.click()
        await browser.$("//a[text()='"+prodName+"']").click()
        await browser.switchWindow("Campaigns")
        await this.saveButton.click()
    }

}

module.exports = new createCampaignPage()