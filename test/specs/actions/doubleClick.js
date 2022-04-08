describe('DoubleAndRightClick', () =>{

    it('doubleAndRightClick', async() => {

        await browser.url("http://demo.guru99.com/test/simple_context_menu.html")
        let rClickButton = await $('//span[text()="right click me"]')
        await rClickButton.click({ button: 'right' })

        // let dblButton = await $('//button[text()="Double-Click Me To See Alert"]')
        // await dblButton.doubleClick()
        // await browser.getAlertText()
        // await browser.acceptAlert()
        
    })       
})