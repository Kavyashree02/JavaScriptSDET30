const { assert } = require("chai");

let commonData = require('../../data/commonData')

var lp = require("../../pageobjects/vtiger/vtigerLoginPage")
var hp = require("../../pageobjects/vtiger/vtigerHomePage")
var p = require("../../pageobjects/vtiger/productPage")
var cp = require("../../pageobjects/vtiger/createProductPage")
let excelData = require('../../../genericUtility/excelUtility')

describe('Product', () => {
    it('createNewProduct',async () => {

        let excelArray = excelData("./TestData.xlsx",'Product')
        await hp.clickOnProductLink()

        await p.clickOnProductLookUpImage()

        await cp.createNewProduct(excelArray[0].ProductName)
            
    });
});