const PetRegistry = {
	// Mining Pets - Orange/Gold colors
	Armadillo: { category: 'Mining', color: '§6' },
	Bal: { category: 'Mining', color: '§6' },
	Bat: { category: 'Mining', color: '§6' },
	Endermite: { category: 'Mining', color: '§6' },
	'Glacite Golem': { category: 'Mining', color: '§b' }, // Light blue for ice theme
	Goblin: { category: 'Mining', color: '§6' },
	'Mithril Golem': { category: 'Mining', color: '§3' }, // Dark aqua for mithril
	Mole: { category: 'Mining', color: '§6' },
	Rock: { category: 'Mining', color: '§8' }, // Dark gray for rock
	Scatha: { category: 'Mining', color: '§6' },
	Silverfish: { category: 'Mining', color: '§7' }, // Gray for silverfish
	'Wither Skeleton': { category: 'Mining', color: '§8' }, // Dark gray
	Snail: { category: 'Mining', color: '§6' },

	// Combat Pets - Red/Dark Red colors
	Ankylosaurus: { category: 'Combat', color: '§c' },
	'Black Cat': { category: 'Combat', color: '§0' }, // Black for black cat
	Blaze: { category: 'Combat', color: '§e' }, // Yellow for fire
	Eerie: { category: 'Combat', color: '§5' }, // Purple for spooky
	'Ender Dragon': { category: 'Combat', color: '§5' }, // Purple for ender
	Enderman: { category: 'Combat', color: '§0' }, // Black for enderman
	Ghoul: { category: 'Combat', color: '§8' }, // Dark gray for undead
	'Golden Dragon': { category: 'Combat', color: '§6' }, // Gold
	Golem: { category: 'Combat', color: '§7' }, // Gray for iron
	'Grandma Wolf': { category: 'Combat', color: '§f' }, // White for grandma
	Griffin: { category: 'Combat', color: '§e' }, // Yellow for mythical
	Hound: { category: 'Combat', color: '§4' }, // Dark red
	Jerry: { category: 'Combat', color: '§a' }, // Green for jerry
	Kuudra: { category: 'Combat', color: '§4' }, // Dark red for boss
	'Magma Cube': { category: 'Combat', color: '§c' }, // Red for magma
	Mammoth: { category: 'Combat', color: '§f' }, // White for mammoth
	Phoenix: { category: 'Combat', color: '§c' }, // Red for fire bird
	Pigman: { category: 'Combat', color: '§d' }, // Pink for pigman
	'Rift Ferret': { category: 'Combat', color: '§5' }, // Purple for rift
	Skeleton: { category: 'Combat', color: '§f' }, // White for bones
	'Skeleton Horse': { category: 'Combat', color: '§7' }, // Gray
	Snowman: { category: 'Combat', color: '§f' }, // White for snow
	Spider: { category: 'Combat', color: '§8' }, // Dark gray
	Spirit: { category: 'Combat', color: '§b' }, // Light blue for spirit
	Tarantula: { category: 'Combat', color: '§8' }, // Dark gray
	Tiger: { category: 'Combat', color: '§6' }, // Orange for tiger
	'T-Rex': { category: 'Combat', color: '§a' }, // Green for dinosaur
	Turtle: { category: 'Combat', color: '§2' }, // Dark green
	Wolf: { category: 'Combat', color: '§f' }, // White
	Zombie: { category: 'Combat', color: '§2' }, // Dark green for zombie

	// Farming Pets - Green colors
	Bee: { category: 'Farming', color: '§e' }, // Yellow for bee
	Chicken: { category: 'Farming', color: '§f' }, // White
	Elephant: { category: 'Farming', color: '§7' }, // Gray
	'Mooshroom Cow': { category: 'Farming', color: '§c' }, // Red for mushroom
	Hedgehog: { category: 'Farming', color: '§6' }, // Orange/brown
	Pig: { category: 'Farming', color: '§d' }, // Pink
	Rabbit: { category: 'Farming', color: '§f' }, // White
	Slug: { category: 'Farming', color: '§a' }, // Green

	// Foraging Pets - Dark Green colors
	Ocelot: { category: 'Foraging', color: '§e' }, // Yellow for jungle cat
	Giraffe: { category: 'Foraging', color: '§e' }, // Yellow
	Lion: { category: 'Foraging', color: '§6' }, // Orange/gold
	Monkey: { category: 'Foraging', color: '§6' }, // Orange/brown

	// Fishing Pets - Blue/Aqua colors
	Ammonite: { category: 'Fishing', color: '§b' }, // Light blue
	'Baby Yeti': { category: 'Fishing', color: '§f' }, // White for snow
	'Blue Whale': { category: 'Fishing', color: '§9' }, // Blue
	Dolphin: { category: 'Fishing', color: '§b' }, // Light blue
	'Flying Fish': { category: 'Fishing', color: '§3' }, // Dark aqua
	Megalodon: { category: 'Fishing', color: '§8' }, // Dark gray for shark
	Penguin: { category: 'Fishing', color: '§0' }, // Black and white
	Reindeer: { category: 'Fishing', color: '§6' }, // Orange/brown
	Spinosaurus: { category: 'Fishing', color: '§2' }, // Dark green
	Squid: { category: 'Fishing', color: '§1' }, // Dark blue
	'Hermit Crab': { category: 'Fishing', color: '§c' }, // Red

	// Enchanting Pet - Purple color
	Guardian: { category: 'Enchanting', color: '§5' }, // Purple

	// Alchemy Pets - Purple/Pink colors
	Jellyfish: { category: 'Alchemy', color: '§d' }, // Pink
	Parrot: { category: 'Alchemy', color: '§a' }, // Green
	Sheep: { category: 'Alchemy', color: '§f' }, // White

	// Taming Pet - Light Purple
	Owl: { category: 'Taming', color: '§6' }, // Orange/brown

	// Other Pets - Mixed colors
	Bingo: { category: 'Other', color: '§e' }, // Yellow
	Montezuma: { category: 'Other', color: '§6' }, // Gold
	Wisp: { category: 'Other', color: '§b' }, // Light blue for spirit
};

// Category color mapping for fallback
const CategoryColors = {
	Mining: '§6', // Gold/Orange
	Combat: '§c', // Red
	Farming: '§a', // Green
	Foraging: '§2', // Dark Green
	Fishing: '§b', // Light Blue
	Enchanting: '§5', // Purple
	Alchemy: '§d', // Pink
	Taming: '§e', // Yellow
	Other: '§f', // White
};

function getPetInfo(petName) {
	const normalizedName = petName.trim();

	if (PetRegistry[normalizedName]) {
		return PetRegistry[normalizedName];
	}

	const lowerName = normalizedName.toLowerCase();
	for (const [registeredName, info] of Object.entries(PetRegistry)) {
		if (registeredName.toLowerCase() === lowerName) {
			return info;
		}
	}

	return {
		category: 'Unknown',
		color: '§f',
	};
}

function getPetColor(petName) {
	return getPetInfo(petName).color;
}

function getPetCategory(petName) {
	return getPetInfo(petName).category;
}

function getPetsByCategory(category) {
	return Object.keys(PetRegistry).filter((petName) => PetRegistry[petName].category === category);
}

function getCategoryColor(category) {
	return CategoryColors[category] || '§f';
}

export { PetRegistry, CategoryColors, getPetInfo, getPetColor, getPetCategory, getPetsByCategory, getCategoryColor };
