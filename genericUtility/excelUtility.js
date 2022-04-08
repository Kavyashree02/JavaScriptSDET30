let xlsx = require("xlsx")

//read the excelfile and craete a workbook
// let wb = xlsx.readFile('./projectData.xlsx')


// //get the sheetNmaes
// let sheetNames = wb.SheetNames
// // console.log(sheetNames);
// console.log(sheetNames[0]);


// //create a worksheet
// let ws = wb.Sheets['Sheet1']
// // console.log(ws);

// // convert worksheet into json
// let derivedData = xlsx.utils.sheet_to_json(ws)
// // console.log(json);

// // console.log(derivedData[0].password);
// console.log("============================");
// // console.log(derivedData[1]);


function readDataFromExcel(filePath, sheetName) {
    let wb = xlsx.readFile(filePath)    //'./projectData.xlsx'


//get the sheetNmaes
let sheetNames = wb.SheetNames
// console.log(sheetNames);
// console.log(sheetNames[0]);


//create a worksheet
let ws = wb.Sheets[sheetName]    //'Sheet1'
// console.log(ws);

// convert worksheet into json
let derivedData = xlsx.utils.sheet_to_json(ws)
return derivedData
// console.log(json);

// console.log(derivedData[0].password);
}
// let data = readDataFromExcel('./projectData.xlsx', 'Sheet1')
// console.log(data);

module.exports = readDataFromExcel