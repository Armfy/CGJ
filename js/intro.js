export default class intro extends Phaser.Scene {
  constructor() {
    super({ key: 'intro' });
  }

  preload() {
    this.load.image('background', '/images/intro.png'); // Image de fond
  }
  create() {
    // Détection d'un clic ou d'une touche pour passer au premier niveau
    this.input.keyboard.on('keydown', () => {
      this.scene.start('chambre');
    });

    this.input.on('pointerdown', () => {
      this.scene.start('chambre');
    });
  }
}