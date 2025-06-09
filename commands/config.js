import { registerCommand } from '../commandManager.js';
import { createPositionSettingGUI } from '../gui/petDisplay.js';
import Settings from '../config.js';

registerCommand({
	aliases: ['settings', 'setting'],
	execute: () => {
		Settings.openGUI();
	},
});

registerCommand({
	aliases: ['toggle'],
	execute: () => {
		Settings.displayAutoPets = !Settings.displayAutoPets;
		ChatLib.chat(`§6[APR] §fPet display: ${Settings.displayAutoPets ? '§aEnabled' : '§cDisabled'}`);
	},
});

registerCommand({
	aliases: ['position', 'pos'],
	execute: () => {
		const positionGUI = createPositionSettingGUI();
		positionGUI.open();
		ChatLib.chat('§6[APR] §fPositioning GUI opened!');
	},
});
