import menu from "/menu.js";

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
      gravity: { y: 0 }, // gravité verticale
      debug: true
    }
  },
  scene: [menu]
};

// création et lancement du jeu
var game = new Phaser.Game(config);