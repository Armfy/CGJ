export default class intro extends Phaser.Scene {
  constructor() {
    super({ key: 'intro' });
  }

  preload() {
    this.load.image('bcg_intro', '/images/intro.png'); // Image de fond
  }
  create() {

    const bcg_intro = this.add.image(450, 328, 'bcg_intro'); // Position de l'image de fond (centrée)
    bcg_intro.setScale(0.26); // Réduire l'échelle à 50% de sa taille originale

    // Instructions pour continuer
    this.add.text(450, 550, 'Cliquez pour continuer', { 
      font: 'bold 52px kiwisoda',
      color: '#fff', 
      align: 'center',
      
    }).setOrigin(0.5);
    // Détection d'un clic ou d'une touche pour passer au premier niveau
    this.input.keyboard.on('keydown', () => {
      this.scene.start('chambre');
    });

    this.input.on('pointerdown', () => {
      this.scene.start('chambre');
    });
  }
}