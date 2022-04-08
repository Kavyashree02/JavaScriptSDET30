class HomePage {

    get adminImage(){
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }
    async hoverOnAdminImage(){
        await this.adminImage.waitForDisplayed()
        await this.adminImage.moveTo()
    }
    get SignOutLink(){
        return $("//a[. = 'Sign Out']")
    }
    async clickOnSignOutLink(){
        await this.SignOutLink.waitForDisplayed()
        await this.SignOutLink.click()
    }
    async logoutFromApplication(){
        await this.hoverOnAdminImage()
        await this.clickOnSignOutLink()
    }

    get OrganizationLink(){
        return $("(//a[text()='Organizations'])[1]")
    }
    async clickOnOrganizationLink(){
        await this.OrganizationLink.waitForDisplayed()
        await this.OrganizationLink.click()
    }

    get ContactLink(){
        return $("//a[text()='Contacts']")
    }
    async clickContactLink(){
        await this.ContactLink.waitForDisplayed()
        await this.ContactLink.click()
    }


    get campaignLink(){
        return $("//a[@name='Campaigns']")
    }

    async clickOnCampaignLink(){
        await this.campaignLink.click()
    }

    get productLink(){
        return $("//a[text()='Products']")
    }
    
    async clickOnProductLink(){
        await this.productLink.click()
    }

    get moreLink()
    {
        return $("//a[text()='More']")
    }

    async moreHover(){
        const moreXLoc = await this.moreLink.getLocation('x')
        const moreYLoc = await this.moreLink.getLocation('y')
        await  this.moreLink.moveTo(moreXLoc,moreYLoc)
    }
    

}
module.exports = new HomePage()