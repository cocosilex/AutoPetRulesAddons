import { registerCommand } from '../commandManager.js';
import { createPositionSettingGUI } from '../gui/petDisplay.js';
import Settings from '../config.js';

registerCommand({
	aliases: ['settings', 'setting'],
	description: 'Open the Vigilance settings GUI',
	category: 'config',
	showInHelp: true,
	execute: () => {
		Settings.openGUI();
	},
});

registerCommand({
	aliases: ['toggle'],
	description: 'Pet display management',
	category: 'config',
	showInHelp: true,
	execute: () => {
		Settings.displayAutoPets = !Settings.displayAutoPets;
		ChatLib.chat(`§6[APR] §fPet display: ${Settings.displayAutoPets ? '§aEnabled' : '§cDisabled'}`);
	},
});

registerCommand({
	aliases: ['position', 'pos'],
	description: 'Open the pet text positioning GUI',
	category: 'pets',
	showInHelp: true,
	execute: () => {
		const positionGUI = createPositionSettingGUI();
		positionGUI.open();
		ChatLib.chat('§6[APR] §fPositioning GUI opened!');
	},
});

registerCommand({
	aliases: ['reset', 'resetpos'],
	description: 'Reset pet position to center',
	category: 'pets',
	showInHelp: true,
	execute: () => {
		Settings.petDisplayX = 0.5;
		Settings.petDisplayY = 0.5;
		ChatLib.chat('§6[APR] §fText position reset to center!');
	},
});
