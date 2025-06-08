import Settings from '../config.js';
import { getPetColor } from '../petRegistry.js';

let autoPetText = '';
let stopAutoPetDisplay = false;

function getPetDisplayPosition() {
	const screenWidth = Renderer.screen.getWidth();
	const screenHeight = Renderer.screen.getHeight();
	return {
		x: screenWidth * Settings.petDisplayX,
		y: screenHeight * Settings.petDisplayY,
	};
}

function getDisplayScale() {
	return Settings.petDisplayScale / 10;
}

function createPositionSettingGUI() {
	const gui = new Gui();
	let isDragging = false;
	let dragOffsetX = 0;
	let dragOffsetY = 0;

	const screenWidth = Renderer.screen.getWidth();
	const screenHeight = Renderer.screen.getHeight();

	let currentPos = getPetDisplayPosition();
	gui.registerDraw(() => {
		new Rectangle(0x50000000, 0, 0, screenWidth, screenHeight).draw();
		new Text('§e§lPET NAME', currentPos.x, currentPos.y).setAlign('CENTER').setShadow(true).setScale(getDisplayScale()).draw();

		new Text('§6Click and drag the text to position it', screenWidth / 2, 50).setAlign('CENTER').setShadow(true).draw();
		new Text('§aPress ESCAPE to save and close', screenWidth / 2, 70).setAlign('CENTER').setShadow(true).draw();
		new Text('§ePress + to make bigger, - to make smaller', screenWidth / 2, 90).setAlign('CENTER').setShadow(true).draw();

		new Text(`§fPosition: X=${Math.round(Settings.petDisplayX * 100)}%, Y=${Math.round(Settings.petDisplayY * 100)}%`, 10, screenHeight - 50).setShadow(true).draw();
		new Text(`§fScale: ${getDisplayScale().toFixed(1)}x`, 10, screenHeight - 30).setShadow(true).draw();
	});
	gui.registerClicked((x, y, button) => {
		if (button !== 0) return;

		const textWidth = Renderer.getStringWidth('PET NAME') * getDisplayScale();
		const textHeight = 18 * getDisplayScale();

		if (x >= currentPos.x - textWidth / 2 && x <= currentPos.x + textWidth / 2 && y >= currentPos.y - textHeight / 2 && y <= currentPos.y + textHeight / 2) {
			isDragging = true;
			dragOffsetX = x - currentPos.x;
			dragOffsetY = y - currentPos.y;
		}
	});

	gui.registerMouseDragged((x, y, button) => {
		if (button !== 0 || !isDragging) return;

		Settings.petDisplayX = Math.max(0, Math.min(1, (x - dragOffsetX) / screenWidth));
		Settings.petDisplayY = Math.max(0, Math.min(1, (y - dragOffsetY) / screenHeight));

		currentPos = getPetDisplayPosition();
	});

	gui.registerMouseReleased((x, y, button) => {
		if (button === 0) {
			isDragging = false;
		}
	});
	gui.registerKeyTyped((char, keyCode) => {
		if (keyCode === 1) {
			gui.close();
			ChatLib.chat('§6[APR] §aPosition saved!');
		} else if (String(char) === '+') {
			Settings.petDisplayScale = Math.min(50, Settings.petDisplayScale + 1);
		} else if (String(char) === '-') {
			Settings.petDisplayScale = Math.max(10, Settings.petDisplayScale - 1);
		}
	});

	return gui;
}

const overlayRegister = register('renderOverlay', () => {
	if (!Settings.displayAutoPets) return;
	const pos = getPetDisplayPosition();
	autoPetDisplayedText = new Text(autoPetText, pos.x, pos.y).setAlign('CENTER').setShadow(true).setScale(getDisplayScale());

	if (autoPetDisplayedText) {
		autoPetDisplayedText.draw();
	}
}).unregister();

function displayPet(petName, color) {
	if (!Settings.displayAutoPets || stopAutoPetDisplay) return;

	autoPetText = `${color}${petName}`;
	overlayRegister.register();

	const duration = parseInt(Settings.displayDuration) || 1500;

	setTimeout(() => {
		if (autoPetText !== `${color}${petName}`) return;
		overlayRegister.unregister();
		autoPetText = '';
	}, duration);
}

register('chat', (pet, event) => {
	if (!Settings.displayAutoPets || stopAutoPetDisplay) return;

	const match = pet.match(/\[Lvl \d+\](?:\s\[(\d+)✦\])?\s(.+?)(?:\s✦)?$/);
	console.log(`Received pet message: ${pet}`);
	if (match) {
		const petName = match[2] || match[1];
		cancel(event);
		const petColor = getPetColor(petName);
		displayPet(petName, petColor);
	}
}).setCriteria('Autopet equipped your ${pet}! VIEW RULE');

export { createPositionSettingGUI };
