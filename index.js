import './commandManager.js';

let welcomeMessageShown = false;

register('worldLoad', () => {
	if (!welcomeMessageShown) {
		setTimeout(() => {
			ChatLib.chat('§6§l[APR] §fAutoPetRulesAddons module loaded with success! Open configs with §e/apr §fand show help with §e/apr help');
			welcomeMessageShown = true;
		}, 1000);
	}
});
