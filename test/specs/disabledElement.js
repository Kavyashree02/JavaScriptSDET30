describe("disabledElement", () => {
    it("disabled_01", async () => {
        await browser.url("http://127.0.0.1:5500/test/specs/Disabled.html")
        let fnameText = await $("//input[@id='fname']")
        await fnameText.setValue("Sushmitha")
        let fnameValue = await fnameText.getValue()
        console.log("Fname:"+fnameValue);
        let lnameText = await $("//input[@id='lname']")
        // await browser.execute((lnameValue) => {
        //     document.getElementById("lname").setAttribute("value", lnameValue)
        // }, "Sinha")

        await browser.execute(() => {
            document.getElementById("lname").value="sinha"
        },)

        // await lnameText.setValue("sinha")
        let lnameValue = await lnameText.getValue()
        console.log("lnameValue"+lnameValue);
        // await browser.debug()
    })
})