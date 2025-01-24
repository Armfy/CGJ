export default class menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  preload() {
    this.load.image('background', '/images/Menu.png'); // Image de fond
  }

  create() {
    const background = this.add.image(450, 328, 'background'); // Position de l'image de fond (centrée)
    background.setScale(0.26); // Réduire l'échelle à 50% de sa taille originale

    // Action au clic : lancer la scène de sélection
    startButton.on('pointerdown', () => {
      this.scene.start('intro'); // Transition vers la scène de sélection
    });
    
}
}