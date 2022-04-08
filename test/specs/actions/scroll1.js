const { assert } = require("chai");

var lp = require("../pageobjects/vtiger/vtigerLoginPage")
var hp = require("../pageobjects/vtiger/vtigerHomePage")
var c = require("../pageobjects/vtiger/contactPage")
var co = require("../pageobjects/vtiger/createContactPage")

describe('Contactscroll', () => {
    it('createNewContact',async () => {

        lp.loginToApplication("admin", "admin")
        console.log("Login successfull");
        wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        await hp.clickContactLink()

        await c.clickOnContactLookUpImage()
        let elem = await $("//input[@name='imagename']")
        await elem.scrollIntoView();
        await browser.debug()
            

    });
});