describe('Scroll', () =>{

    it('scroll', async() => {


        await browser.url("https://www.amazon.com/")
        let elem = await $("//span[text()='Stuffed Animals & Toys under $10']");
        // scroll to specific element
        await elem.scrollIntoView();
        await browser.debug()

    })


})