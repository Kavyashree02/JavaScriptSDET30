describe('launch_Suite',()=> {
    it('navigateToAmazon', async () =>{
        await browser.url("https://amazon.in")
        //url validation
        await expect(browser).toHaveUrlContaining('amazon')
        let title = await browser.getTitle()
        console.log("=============title_of_the_page================"+ title);
        //title validation
        await expect(browser).toHaveTitleContaining('Shopping') 
    })
})