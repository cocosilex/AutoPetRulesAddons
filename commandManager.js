import Settings from './config.js';

let commands = [];
let commandNames = [];
let commandRegistered = false;

function registerCommand(command) {
	commands.push(command);
	commandNames.push(command.aliases[0]);
}

function findTabOutput(input, options) {
	let output = [];

	if (input == undefined || input == '') return options;
	options.forEach((option) => {
		for (let char = 0; char < input.length; char++) {
			if (option[char] != input[char]) break;
			else if (char == input.length - 1) output.push(option);
		}
	});
	return output;
}

function initializeCommands() {
	if (commandRegistered) {
		return;
	}

	register('command', (...args) => {
		let stop = false;
		if (args == undefined || args[0] == undefined) {
			try {
				Settings.openGUI();
			} catch (e) {
				ChatLib.chat('§6[APR] §cError opening Vigilance GUI. Use /apr help for commands.');
			}
			return;
		}

		commands.forEach((command) => {
			if (command.aliases.includes(args[0].toString().toLowerCase())) {
				try {
					command.execute(args);
				} catch (e) {
					ChatLib.chat('§6[APR] §cError executing command: ' + e.message);
				}
				stop = true;
			}
		});

		if (!stop) {
			ChatLib.chat('§6[APR] §cUnknown command. Type "/apr help" to see all commands.');
		}
	})
		.setTabCompletions((args) => {
			let output = [];

			if (args[0].length == 0 || args[0] == undefined) return commandNames;

			if (args[1] == undefined) output = findTabOutput(args[0], commandNames);

			commands.forEach((command) => {
				if (command.aliases.includes(args[0].toLowerCase()) && command.subcommands != undefined) {
					for (let i = 0; i < command.subcommands.length && i <= args.length - 1; i++) output = findTabOutput(args[i + 1], command.subcommands[i]);
				}
			});

			if (output.length == 0) output = findTabOutput(args[0], commandNames);

			return output;
		})
		.setName('apr')
		.setAliases(['autopetrulesaddons', 'apraddons']);

	commandRegistered = true;
}

export { registerCommand };

import './commands/config.js';
import './commands/help.js';

setTimeout(() => {
	initializeCommands();
}, 100);
