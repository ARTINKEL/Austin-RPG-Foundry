export default class austinRPG_PlayerCharacterSheet extends ActorSheet {
    get template(){
        return 'systems/austinrpg/templates/sheets/actor-sheet.html';
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.austinrpg;
        return data;
    }
}