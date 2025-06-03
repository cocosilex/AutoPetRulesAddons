import { @Vigilant, @ButtonProperty, @SwitchProperty, @SelectorProperty,@ SliderProperty, @TextProperty, @ColorProperty, Color } from 'Vigilance';

@Vigilant('AutoPetRulesAddons/config', 'AutoPetRulesAddons Settings', {
	getCategoryComparator: () => (a, b) => {
		const categories = ['General', 'Auto Pet Rules Display'];
		return categories.indexOf(a.name) - categories.indexOf(b.name);
	},
})
class Settings {	
	constructor() {
		this.initialize(this);
		this.setCategoryDescription("General", `&c&lAuto Pet Rules Addons &ev${JSON.parse(FileLib.read("AutoPetRulesAddons", "metadata.json")).version}` + 
        `\n&eBy &6&lcocosilex`)
	}
	@ButtonProperty({
		name: 'GitHub Repository',
		description: 'Copy the link to the AutoPetRulesAddons GitHub repository',
		category: 'General',
		subcategory: 'Links',
		text: 'Open GitHub',
		placeholder: 'Click to copy',
	})
	copyGitHubLink() {
		ChatLib.command("ct copy https://github.com/cocosilex/AutoPetRulesAddons", true);
	}

	@ButtonProperty({
		name: 'Reset Settings',
		description: 'Reset all settings to default values',
		category: 'General',
		subcategory: 'Reset Settings',
		placeholder: 'Reset',
	})
	resetSettings() {
		this.displayAutoPets = true;
		this.displayDuration = 1500;
		this.petDisplayX = 0.5;
		this.petDisplayY = 0.5;
		this.petDisplayScale = 20;
		ChatLib.chat('§6[APR] §fSettings reset to defaults!');
	}
	@SwitchProperty({
		name: 'Display Auto Pets',
		description: 'Show pet notifications when autopet activates',
		category: 'Auto Pet Rules Display',
		subcategory: 'General Display Settings',


	})
	displayAutoPets = true;

	@ButtonProperty({
		name: 'Open Position GUI',
		description: 'Open the position setting interface',
		category: 'Auto Pet Rules Display',
		subcategory: 'General Display Settings',
		placeholder: 'Open GUI',
	})
	openPositionGUI() {
		ChatLib.command("apr position", true);
	}

	@SliderProperty({
		name: 'Display Duration',
		description: 'How long to show pet notifications (milliseconds)',
		category: 'Auto Pet Rules Display',
		subcategory: 'Position/scale Settings',
		min: 500,
		max: 5000,
		step: 100,
	})
	displayDuration = 1500;	@SliderProperty({
		name: 'Pet Display Scale',
		description: 'Scale/size of the pet text display (10 = 1.0x scale)',
		category: 'Auto Pet Rules Display',
		subcategory: 'Position/scale Settings',
		min: 10,
		max: 50,
		step: 1,
	})
	petDisplayScale = 20;

	petDisplayX = 0.5;
	petDisplayY = 0.5;
}

export default new Settings();
