describe("suite_01",()=>{
    before(function(){
        console.log("Open the browser");
        console.log("enter the url");
    })
    beforeEach(function(){
        console.log("login to application");
    })
    afterEach(function(){
        console.log("logout of the application");
    })
    after(function(){
        console.log("Close the browser");
    })
    it("test_tc_01", ()=>{
        console.log("test_tc_01");
    })
    it("test_tc_02", ()=>{
        console.log("test_tc_02");
    })
})