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

    // Instructions pour continuer
    this.add.text(450, 550, 'Cliquez pour continuer', { 
      font: 'bold 52px kiwisoda',
      color: '#fff', 
      align: 'center',
      
    }).setOrigin(0.5);


    // Action au clic : lancer la scène de sélection
    this.input.on('pointerdown', () => {
      this.scene.start('intro');
    });
    
}
}