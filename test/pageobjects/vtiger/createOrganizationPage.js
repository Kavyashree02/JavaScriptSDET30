class createOrganizationPage {
    
    get organizationNameText () {
        return $('//input[@name="accountname"]');
    }    
    
    get saveButton(){
        return $('//input[@title="Save [Alt+S]"]')
    }

    get industryDropDown(){
        return $('//select[@name="industry"]')
    }

    async createNewOrganization(orgName, indType){
        await this.organizationNameText.waitForDisplayed()
        await this.organizationNameText.setValue(orgName)
        await this.industryDropDown.waitForDisplayed()
        await this.industryDropDown.selectByAttribute('value', indType);
        await this.saveButton.click()
        console.log("Organization created successfully");
    }
}

module.exports = new createOrganizationPage()