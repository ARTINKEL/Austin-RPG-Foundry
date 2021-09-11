import austinRPG_ItemSheet from "./module/sheets/austinRPG_ItemSheet.js";
import { austinrpg } from "./module/config.js";

Hooks.once("init", function() {
    console.log("austinrpg | initialize");

    CONFIG.austinrpg = austinrpg;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("austinrpg", austinRPG_ItemSheet, { makeDefault: true });
});