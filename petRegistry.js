const PetRegistry = {
	// Mining Pets
	Armadillo: { category: 'Mining', color: '§6' },
	Bal: { category: 'Mining', color: '§6' },
	Bat: { category: 'Mining', color: '§6' },
	Endermite: { category: 'Mining', color: '§6' },
	'Glacite Golem': { category: 'Mining', color: '§b' },
	Goblin: { category: 'Mining', color: '§6' },
	'Mithril Golem': { category: 'Mining', color: '§3' },
	Mole: { category: 'Mining', color: '§6' },
	Rock: { category: 'Mining', color: '§8' },
	Scatha: { category: 'Mining', color: '§6' },
	Silverfish: { category: 'Mining', color: '§7' },
	'Wither Skeleton': { category: 'Mining', color: '§8' },
	Snail: { category: 'Mining', color: '§6' },

	// Combat Pets
	Ankylosaurus: { category: 'Combat', color: '§c' },
	'Black Cat': { category: 'Combat', color: '§0' },
	Blaze: { category: 'Combat', color: '§e' },
	Eerie: { category: 'Combat', color: '§5' },
	'Ender Dragon': { category: 'Combat', color: '§5' },
	Enderman: { category: 'Combat', color: '§0' },
	Ghoul: { category: 'Combat', color: '§8' },
	'Golden Dragon': { category: 'Combat', color: '§6' },
	Golem: { category: 'Combat', color: '§7' },
	'Grandma Wolf': { category: 'Combat', color: '§f' },
	Griffin: { category: 'Combat', color: '§e' },
	Hound: { category: 'Combat', color: '§4' },
	Jerry: { category: 'Combat', color: '§a' },
	Kuudra: { category: 'Combat', color: '§4' },
	'Magma Cube': { category: 'Combat', color: '§c' },
	Mammoth: { category: 'Combat', color: '§f' },
	Phoenix: { category: 'Combat', color: '§c' },
	Pigman: { category: 'Combat', color: '§d' },
	'Rift Ferret': { category: 'Combat', color: '§5' },
	Skeleton: { category: 'Combat', color: '§f' },
	'Skeleton Horse': { category: 'Combat', color: '§7' },
	Snowman: { category: 'Combat', color: '§f' },
	Spider: { category: 'Combat', color: '§8' },
	Spirit: { category: 'Combat', color: '§b' },
	Tarantula: { category: 'Combat', color: '§8' },
	Tiger: { category: 'Combat', color: '§6' },
	'T-Rex': { category: 'Combat', color: '§a' },
	Turtle: { category: 'Combat', color: '§2' },
	Wolf: { category: 'Combat', color: '§f' },
	Zombie: { category: 'Combat', color: '§2' },

	// Farming Pets
	Bee: { category: 'Farming', color: '§e' },
	Chicken: { category: 'Farming', color: '§f' },
	Elephant: { category: 'Farming', color: '§7' },
	'Mooshroom Cow': { category: 'Farming', color: '§c' },
	Hedgehog: { category: 'Farming', color: '§6' },
	Pig: { category: 'Farming', color: '§d' },
	Rabbit: { category: 'Farming', color: '§f' },
	Slug: { category: 'Farming', color: '§a' },

	// Foraging Pets
	Ocelot: { category: 'Foraging', color: '§e' },
	Giraffe: { category: 'Foraging', color: '§e' },
	Lion: { category: 'Foraging', color: '§6' },
	Monkey: { category: 'Foraging', color: '§6' },

	// Fishing Pets
	Ammonite: { category: 'Fishing', color: '§b' },
	'Baby Yeti': { category: 'Fishing', color: '§f' },
	'Blue Whale': { category: 'Fishing', color: '§9' },
	Dolphin: { category: 'Fishing', color: '§b' },
	'Flying Fish': { category: 'Fishing', color: '§3' },
	Megalodon: { category: 'Fishing', color: '§8' },
	Penguin: { category: 'Fishing', color: '§0' },
	Reindeer: { category: 'Fishing', color: '§6' },
	Spinosaurus: { category: 'Fishing', color: '§2' },
	Squid: { category: 'Fishing', color: '§1' },
	'Hermit Crab': { category: 'Fishing', color: '§c' },

	// Enchanting Pet
	Guardian: { category: 'Enchanting', color: '§5' },

	// Alchemy Pets
	Jellyfish: { category: 'Alchemy', color: '§d' },
	Parrot: { category: 'Alchemy', color: '§a' },
	Sheep: { category: 'Alchemy', color: '§f' },

	// Taming Pet
	Owl: { category: 'Taming', color: '§6' },

	// Other Pets
	Bingo: { category: 'Other', color: '§e' },
	Montezuma: { category: 'Other', color: '§6' },
	Wisp: { category: 'Other', color: '§b' },
};

function getPetColor(petName) {
	const normalizedName = petName.trim();

	if (PetRegistry[normalizedName]) {
		return PetRegistry[normalizedName].color;
	} else {
		return '§f';
	}
}

export { getPetColor };
