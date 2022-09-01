import { pridefallActor } from"./sheets/pridefallactor.js";
import { pridefallActorSheet } from "./sheets/pridefallactorsheet.js";
import { pridefallItem } from "./sheets/pridefallitem.js";
import { pridefallItemSheet } from "./sheets/pridefallitemsheet.js";


Hooks.once("init", async function() {
    console.log("pridefall SF | Initialisation du système pridefall Chronicles");
	CONFIG.Actor.documentClass = pridefallActor;
    CONFIG.Item.documentClass = pridefallItem;

    CONFIG.Combat.initiative = {
	    formula: "30+@Perception",
	    decimals: 3
	};

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("pridefall", pridefallItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("pridefall", pridefallActorSheet, { makeDefault: true });
});