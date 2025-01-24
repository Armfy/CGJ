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
  scene: {
    preload: preload,
    create: create,
    update: update
  } // Mettre le menu en première position
};

// création et lancement du jeu
var game = new Phaser.Game(config);
let melo;
let cursors;

function preload() {
  this.load.image('melo', 'images/test.png');
}

function create() {
  melo = this.physics.add.image(100, 100, 'melo');
  melo.body.collideWorldBounds = true;

  cursors = this.input.keyboard.createCursorKeys();

  const platforms = this.physics.add.staticGroup();
  platforms.create(450, 600, null).setDisplaySize(900, 50).refreshBody();
  this.physics.add.collider(melo, platforms);
}

function update() {
  melo.setVelocity(0)

  if (cursors.up.isDown) {
    melo.setVelocity(0,-100); 
  }
  if (cursors.down.isDown) {
    melo.setVelocity(0,100); 
  }
  if(cursors.left.isDown) {
    melo.setVelocity(-100,0);
  }
  if(cursors.right.isDown) {
    melo.setVelocity(100,0);
  }

  if (cursors.up.isDown && cursors.right.isDown) {
    melo.setVelocity(75, -75); // Up-right diagonal
  } else if (cursors.up.isDown && cursors.left.isDown) {
    melo.setVelocity(-75, -75); // Up-left diagonal
  } else if (cursors.down.isDown && cursors.right.isDown) {
    melo.setVelocity(75, 75); // Down-right diagonal
  } else if (cursors.down.isDown && cursors.left.isDown) {
    melo.setVelocity(-75, 75); // Down-left diagonal
  }
}
