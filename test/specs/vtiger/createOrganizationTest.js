const { assert } = require("chai");

// let commonData = require('../../data/commonData')

var lp = require("../../pageobjects/vtiger/vtigerLoginPage")
var hp = require("../../pageobjects/vtiger/vtigerHomePage")
var c = require("../../pageobjects/vtiger/organizationPage")
var co = require("../../pageobjects/vtiger/createOrganizationPage")
let excelData = require('../../../genericUtility/excelUtility')
let random = require('../../../genericUtility/webUtility')

describe('Organization', () => {
    it('createNeworganization',async () => {

        let orgExcelArray = excelData("./TestData.xlsx",'Org')
        let indExcelArray = excelData("./TestData.xlsx",'OrgType')
        await hp.clickOnOrganizationLink()

        await c.clickOnOrgLookUpImage()
        let orgName = orgExcelArray[0].OrgName+random()
        let indType = indExcelArray[0].IndType
        await co.createNewOrganization(orgName,indType)          

    });
});

