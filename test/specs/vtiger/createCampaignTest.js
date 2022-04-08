const { assert } = require("chai");

var lp = require("../../pageobjects/vtiger/vtigerLoginPage")
var hp = require("../../pageobjects/vtiger/vtigerHomePage")
var pp = require("../../pageobjects/vtiger/productPage")
var cpr = require("../../pageobjects/vtiger/createProductPage")
var cp = require("../../pageobjects/vtiger/createCampaignPage")
var camp = require("../../pageobjects/vtiger/campaignPage")
let excelData = require('../../../genericUtility/excelUtility')

describe('Campaign', () =>{
    it('createNewcampaign',async () => {
    
    let campaignExcelArray = excelData("./TestData.xlsx", 'Campaign')
    let productExcelArray = excelData("./TestData.xlsx", 'Product')

    await hp.clickOnProductLink()
    await pp.clickOnProductLookUpImage()
    let productName = productExcelArray[0].ProductName
    let campName = campaignExcelArray[0].CampaignName
    await cpr.createNewProduct(productName)
    await hp.moreHover()
    await hp.clickOnCampaignLink()
    await camp.clickOnCampaignLookUpImage()
    await cp.createNewCampaign(campName,productName)

    })
}) 