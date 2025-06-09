const PetRegistry = {
	// Mining Pets
	Armadillo: '§6',
	Bal: '§6',
	Bat: '§6',
	Endermite: '§6',
	'Glacite Golem': '§b',
	Goblin: '§6',
	'Mithril Golem': '§3',
	Mole: '§6',
	Rock: '§8',
	Scatha: '§6',
	Silverfish: '§7',
	'Wither Skeleton': '§8',
	Snail: '§6',

	// Combat Pets
	Ankylosaurus: '§c',
	'Black Cat': '§0',
	Blaze: '§e',
	Eerie: '§5',
	'Ender Dragon': '§5',
	Enderman: '§0',
	Ghoul: '§8',
	'Golden Dragon': '§6',
	Golem: '§7',
	'Grandma Wolf': '§f',
	Griffin: '§e',
	Hound: '§4',
	Jerry: '§a',
	Kuudra: '§4',
	'Magma Cube': '§c',
	Mammoth: '§f',
	Phoenix: '§c',
	Pigman: '§d',
	'Rift Ferret': '§5',
	Skeleton: '§f',
	'Skeleton Horse': '§7',
	Snowman: '§f',
	Spider: '§8',
	Spirit: '§b',
	Tarantula: '§8',
	Tiger: '§6',
	'T-Rex': '§a',
	Turtle: '§2',
	Wolf: '§f',
	Zombie: '§2',

	// Farming Pets
	Bee: '§e',
	Chicken: '§f',
	Elephant: '§7',
	'Mooshroom Cow': '§c',
	Hedgehog: '§6',
	Pig: '§d',
	Rabbit: '§f',
	Slug: '§a',

	// Foraging Pets
	Ocelot: '§e',
	Giraffe: '§e',
	Lion: '§6',
	Monkey: '§6',

	// Fishing Pets
	Ammonite: '§b',
	'Baby Yeti': '§f',
	'Blue Whale': '§9',
	Dolphin: '§b',
	'Flying Fish': '§3',
	Megalodon: '§8',
	Penguin: '§0',
	Reindeer: '§6',
	Spinosaurus: '§2',
	Squid: '§1',
	'Hermit Crab': '§c',

	// Enchanting Pet
	Guardian: '§5',

	// Alchemy Pets
	Jellyfish: '§d',
	Parrot: '§a',
	Sheep: '§f',

	// Taming Pet
	Owl: '§6',

	// Other Pets
	Bingo: '§e',
	Montezuma: '§6',
	Wisp: '§b',
};

function getPetColor(petName) {
	const normalizedName = petName.trim();
	return PetRegistry[normalizedName] || '§f';
}

export { getPetColor };
