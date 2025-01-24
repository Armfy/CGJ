export default class menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  preload() {
    this.load.image('background', '/images/Menu.png'); // Image de fond
  }

  create() {
    this.add.image(450, 328, 'background'); // Position de l'image de fond (centrée)

    // Action au clic : lancer la scène de sélection
    startButton.on('pointerdown', () => {
      this.scene.start('intro'); // Transition vers la scène de sélection
    });
    
}
}