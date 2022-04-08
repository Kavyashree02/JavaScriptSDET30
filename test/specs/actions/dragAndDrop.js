describe('DragAndDown', () =>{

    it('sDragAndDrop', async() => {

        await browser.url("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        let ele = await $('#box6')
        let target = await $('#box102')

        await ele.dragAndDrop(target)

    })       
})