describe("UploadFile", () => {

    it('uploadFile', async() =>{

        await $("//a[text()='Contacts']").click()
        let elem = await $("//a[text()='Create Mail Merge templates ']");
        // scroll to specific element
        await elem.scrollIntoView();
        await elem.click()
        await $("//input[@name='binFile']").setValue("C:\\Users\\sushmitha\\Desktop\\JSNotes\\JS.docx")
        // await $("//input[@name='binFile']").uploadFile("")
        await browser.debug()
        

    
    })
})