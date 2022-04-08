describe("CalendarPopUp", () => {

    it('selectDate', async() =>{

        await browser.maximizeWindow()
        await browser.url("https://www.goibibo.com/")
        await $("//span[@class='sc-kfPuZi dprjVP fswDownArrow']").click()

        let date = 12;
	    let monthYear = "December 2022";

        let dateXPath = await $("//div[text()='"+monthYear+"']/ancestor::div[@class='DayPicker-Month']/descendant::p[text()='"+date+"']")
        // datep.click()
        let arrowXpath = await $("//span[@aria-label='Next Month']")

        for(;;){
        try{
            await dateXPath.click()
            break
        }
        catch(err){
            await arrowXpath.click()
        }
    }

        
        // await browser.debug()

    })
})