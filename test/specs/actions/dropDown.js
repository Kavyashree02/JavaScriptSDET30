describe('DropDown', () =>{

    it('selectDropDown', async() => {

        let elementArr = await $$('//select[@id="qccombo"]//option')
        //console.log(elementArr)
        
        let textArray = []
        for (let element of elementArr){
            let text = await element.getText() 
            textArray.push(text)
        }
        console.log(textArray);
    })
})