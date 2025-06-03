# AutoPetRulesAddons - ChatTriggers Module for Hypixel Skyblock

A modern and comprehensive ChatTriggers module for Hypixel Skyblock that displays pet notifications on screen instead of in chat, featuring a Vigilance GUI interface and customizable positioning.

### 🎮 User Interface

- **Modern Vigilance interface** with organized categories and intuitive navigation
- **Interactive position GUI** with drag-and-drop positioning and real-time scaling
- **Command system** with tab completion and help documentation

### 🐾 Auto Pet Display

- **On-screen display** of automatically equipped pets via AutoPet/Pet Rules
- **Automatic detection** of autopet chat messages
- **Customizable positioning** with interactive drag-and-drop interface
- **Configurable settings** including display duration, scale, and toggle options

## 📦 Installation

1. **Prerequisites**:
   - ChatTriggers installed in your Minecraft 1.8.9 mods folder
   - **Vigilance** installed (required for configuration interface)
2. **Installation**: Copy the `AutoPetRulesAddons` folder to `config/ChatTriggers/modules/`
3. **Reload**: Use `/ct load` or restart Minecraft

## 🎯 Commands

### Main Commands

| Command         | Aliases                             | Description                   |
| --------------- | ----------------------------------- | ----------------------------- |
| `/apr`          | `/autopetrulesaddons`, `/apraddons` | **Opens Vigilance interface** |
| `/apr settings` | `/apr config`                       | **Opens Vigilance interface** |
| `/apr help`     | `/apr h`                            | Displays available commands   |

### Pet Display Commands

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `/apr position` | Opens positioning GUI                |
| `/apr toggle`   | Enable/disable pet display feature   |
| `/apr reset`    | Reset all settings to default values |

## 🎨 Advanced Features

### Pet Management

- Automatic detection of autopet chat messages
- Chat message cancellation (removes from chat)
- Confirmation messages for settings changes

## 🐛 Support and Troubleshooting

If you encounter issues:

1. Verify ChatTriggers is up to date
2. Use `/ct reload` to reload the module
3. Check the console with `/ct console` for errors
4. Reset settings using `/apr reset` if necessary

### Common Issues

- **Commands not working**: Module may not be loaded, try `/ct reload`
- **Position not saving**: Ensure you press ESC to save position changes
- **Text not appearing**: Check if Display Auto Pets is enabled in settings

## 🔧 Technical Details

- **Supported Minecraft Version**: 1.8.9
- **Dependencies**: ChatTriggers, Vigilance

## 📝 Changelog

See [releases](https://github.com/cocosilex/AutoPetRulesAddons/releases) for version history and updates.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs via GitHub Issues
- Suggest new features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created by @cocosilex** | [GitHub Repository](https://github.com/cocosilex/AutoPetRulesAddons)
