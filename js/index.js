/***********************************************************************/
/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT 
/***********************************************************************/

// configuration générale du jeu
var config = {
  type: Phaser.AUTO,
  width: 900, // largeur en pixels
  height: 656, // hauteur en pixels
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 } // gravité verticale
    }
  },
  scene: [] // Mettre le menu en première position
};

// création et lancement du jeu
var game = new Phaser.Game(config);