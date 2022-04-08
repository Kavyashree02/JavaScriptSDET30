class createProductPage {
    
    get productNameText () {
        return $("//input[@name='productname']");
    }
    
    get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createNewProduct(productName){
        await this.productNameText.waitForDisplayed()
        await this.productNameText.setValue(productName)
        await this.saveButton.waitForClickable()
        await this.saveButton.click()
    }

}

module.exports = new createProductPage()