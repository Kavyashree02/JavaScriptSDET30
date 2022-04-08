describe("Keys", () => {

    it('enter', async() =>{
        // await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()
        let searchText = await $("//input[@name='query_string']")
        await searchText.setValue("Calender")
        await browser.keys(['Control','a'])
        await browser.keys(['Control','x'])
        // await browser.keys('Enter')
        // await browser.debug()

    })
})