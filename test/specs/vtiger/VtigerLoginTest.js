const { assert } = require("chai");
var lp = require("../../pageobjects/vtiger/vtigerLoginPage")
let commonData = require('../../data/commonData')
let testData = require('../../data/testSpecificData')
let excelData = require('../../../genericUtility/excelUtility')

describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        lp.loginToApplication(commonData.userName, commonData.password)
        console.log("Login successfull");
        wdioExpect(browser).toHaveTitleContaining(testData.partialTitleHomePage)
    });
    
    it.only('loginToVtigerAndValidateTitle from excel',async () => {         //test case name
        let excelArray = excelData("./projectData.xlsx", 'Sheet1')
        lp.loginToApplication(excelArray[0].url, excelArray[0].username, excelArray[0].password)
        wdioExpect(browser).toHaveTitleContaining(testData.partialTitleHomePage)
    });
});