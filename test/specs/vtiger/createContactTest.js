const { assert } = require("chai");

var lp = require("../../pageobjects/vtiger/vtigerLoginPage")
var hp = require("../../pageobjects/vtiger/vtigerHomePage")
var c = require("../../pageobjects/vtiger/contactPage")
var co = require("../../pageobjects/vtiger/createContactPage")
let excelData = require('../../../genericUtility/excelUtility')

describe('Contact', () => {
    it('createNewContact',async () => {

        let contactExcelArray = excelData("./TestData.xlsx", 'Contact')
        await hp.clickContactLink()

        let lastName = contactExcelArray[0].LastName
        await c.clickOnContactLookUpImage()
        await co.createNewContact(lastName)
            

    });
});