import austinRPG_ItemSheet from "./module/sheets/austinRPG_ItemSheet.js";

Hooks.once("init", function() {
    console.log("austin-rpg | initialize");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("austin-rpg", austinRPG_ItemSheet, { makeDefault: true });
});