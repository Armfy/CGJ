var player; // désigne le sprite du joueur
var cursors; // variable pour le clavier

export default class intro extends Phaser.Scene {
    constructor() {
        super({ key: 'map_donjon' });
    }

    preload() {
        // Chargement des tuiles de jeu
        this.load.image("tileset", "/images/tileset.png");

        // Chargement de la carte
        this.load.tilemapTiledJSON("carte", "/map/map_donjon.json");

        // Chargement du sprite du joueur
        this.load.spritesheet("player", "/images/spritesheet-melo.png", {
            frameWidth: 105,
            frameHeight: 190,
        });
    }

    create() {
        // Chargement de la carte du niveau
        const carteDuNiveau = this.add.tilemap("carte");

        // Chargement du jeu de tuiles
        const tileset = carteDuNiveau.addTilesetImage("tileset");

        // Chargement des calques
        const backgroundLayer = carteDuNiveau.createLayer("calque_background", tileset);
        const backgroundLayer2 = carteDuNiveau.createLayer("calque_background_2", tileset);
        const plateformes = carteDuNiveau.createLayer("calque_plateforme", tileset);

        // Définition des objets solides
        plateformes.setCollisionByProperty({ estSolide: true });

        // Création du joueur
        player = this.physics.add.sprite(100, 100, "player");

        // Collision entre le joueur et les plateformes
        this.physics.add.collider(player, plateformes);

        // Création des animations
        this.anims.create({
            key: "stand-face",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1,
        });

        this.anims.create({
            key: "stand-back",
            frames: this.anims.generateFrameNumbers("player", { start: 5, end: 7 }),
            frameRate: 5,
            repeat: -1,
        });

        this.anims.create({
            key: "walk-face",
            frames: this.anims.generateFrameNumbers("player", { start: 11, end: 13 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "walk-back",
            frames: this.anims.generateFrameNumbers("player", { start: 14, end: 16 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "walk-left",
            frames: this.anims.generateFrameNumbers("player", { start: 17, end: 22 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "walk-right",
            frames: this.anims.generateFrameNumbers("player", { start: 17, end: 22 }),
            frameRate: 10,
            repeat: -1,
        });

        // Configuration des touches clavier
        cursors = this.input.keyboard.createCursorKeys();

        // Configuration de la caméra
        const camera = this.cameras.main;
        camera.startFollow(player);
        
        // Définir les limites de la caméra pour qu'elle suive correctement le joueur
        const mapWidth = carteDuNiveau.widthInPixels;
        const mapHeight = carteDuNiveau.heightInPixels;
        
        // La caméra suit le joueur mais reste dans les limites de la carte
        camera.setBounds(0, 0, mapWidth, mapHeight);
    }

    update() {
        // Réinitialisation des vitesses X et Y
        player.setVelocity(0);

        // Déplacements horizontaux
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play("walk-left", true);
            player.direction = "left";
            player.flipX = true;
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play("walk-right", true);
            player.direction = "right";
            player.flipX = false;
        }

        // Déplacements verticaux
        if (cursors.up.isDown) {
            player.setVelocityY(-160);
            player.anims.play("walk-back", true);
            player.direction = "up";
        } else if (cursors.down.isDown) {
            player.setVelocityY(160);
            player.anims.play("walk-face", true);
            player.direction = "down";
        }

        // Si aucune touche n'est pressée, passer à l'animation "stand"
        if (
            !cursors.left.isDown &&
            !cursors.right.isDown &&
            !cursors.up.isDown &&
            !cursors.down.isDown
        ) {
            if (player.direction === "up") {
                player.anims.play("stand-back", true);
            } else if (player.direction === "down") {
                player.anims.play("stand-face", true);
            } else if (player.direction === "left") {
                player.anims.play("stand-face", true); // Stand dans la direction "face" si gauche
            } else if (player.direction === "right") {
                player.anims.play("stand-face", true); // Stand dans la direction "face" si droite
            }
        }
    }
}
