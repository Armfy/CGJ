import menu from "/js/menu.js";
import intro from "/js/intro.js";

/***********************************************************************/
/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT 
/***********************************************************************/

// configuration générale du jeu
var config = {
  width: 900, // largeur en pixels
  height: 656, // hauteur en pixels
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [menu, intro]
};

// Initialize the game after defining the config
const game = new Phaser.Game(config);
game.config.interface = [];
game.config.slotTexts = [];
game.config.slot = [null,null,null,null];


game.config.textbox;
game.config.textTB = [];

game.config.interact_objects_list =[];

game.scene.start("menu");