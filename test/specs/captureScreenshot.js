describe("captureScreenshot", () => {

    it('screenshot', async() =>{

        await browser.url("https://www.amazon.com/")
        await browser.saveScreenshot('./webdriverioScreenshot.png');

    })

})