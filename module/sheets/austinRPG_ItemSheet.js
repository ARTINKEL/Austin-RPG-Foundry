export default class austinRPG_ItemSheet extends ItemSheet {
    get template(){
        return 'systems/austinrpg/templates/sheets/weapon-sheet.html';
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.austinrpg;
        return data;
    }
}