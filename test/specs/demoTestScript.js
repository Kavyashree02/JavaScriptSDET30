//mocha snippet


//describe and it block can written alone but describe block 
describe("test_suite", ()=>{
    it.skip("test_tc_01", ()=>{
        console.log("test_tc_01");
    })
    it("test_tc_02", ()=>{
        console.log("test_tc_02");
    })
    xit("test_tc_03", ()=>{
        console.log("test_tc_03"); 
    })
}) // describes acts as test suite and it acts as testscript

describe("test_suite1", () => {
    it("test1_tc_01", ()=>{
        console.log("test1_tc_01");
    })
    it("test1_tc_02",()=>{
        console.log("test2_tc_02");
    })
       
});
 