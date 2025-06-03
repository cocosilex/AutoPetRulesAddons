import { registerCommand } from '../commandManager.js';

registerCommand({
	aliases: ['help', 'h'],
	description: 'Display all available commands',
	category: 'general',
	showInHelp: true,
	execute: () => {
		ChatLib.chat('§6§l[APR] §fCommands:');
		ChatLib.chat('§e/apr help [category] §f- Display help for a category');
		ChatLib.chat('§e/apr settings §f- Open configuration');
		ChatLib.chat('§e/apr position §f- Pet text positioning');
		ChatLib.chat('§e/apr reset §f- Reset settings to default');
		ChatLib.chat('§e/apr toggle §f- Enable/disable the module features');
	},
});
