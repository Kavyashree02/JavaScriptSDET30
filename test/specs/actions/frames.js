describe('Frame', () =>{

    it('frame', async() => {

        await browser.url("https://chercher.tech/practice/frames")

        let text = await $('//span[text()="Not a Friendly Topic"]')
        console.log(text.getText());
    
        let frame1 = await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        
        let frame3 = await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("//input[@id='a']").click()

        await browser.switchToParentFrame()
        await $("//b[@id='topic']//following-sibling::input").setValue("javascript")

        await browser.switchToFrame(null)

        let frame2 = await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        let animalsdrpdwn = await $("//select[@id='animals']")
        await animalsdrpdwn.selectByVisibleText("Avatar")      
        // await browser.dbebug()


    })       
})