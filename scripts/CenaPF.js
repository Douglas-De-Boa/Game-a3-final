class CenaPF extends Phaser.Scene {
    constructor() {
        super({ key: "CenaPF" });
        this.player = null;
    }

    preload() {
        this.load.image("botaoplay", "./assets/img/conteudo/BOTÃO/playjg.png");
        this.load.tilemapTiledJSON("mapa", "./map-professor-att.json");
        this.load.image(
            "CFS1",
            "./assets/map_professor/Classroom_First_Spritesheet_1.png"
        );
        this.load.image(
            "CFS6",
            "./assets/map_professor/Classroom_First_Spritesheet_6.png"
        );
        this.load.image(
            "CPFSc",
            "./assets/map_professor/Classroom_PropsFirst_Spritesheet-cop.png"
        );
        this.load.image(
            "CPSP4",
            "./assets/map_professor/ClassroomPropsSecondSpritesheet4.png"
        );
        this.load.image(
            "CSS7",
            "./assets/map_professor/ClassroomSecondSpritesheet7.png"
        );
        this.load.image(
            "CSSC",
            "./assets/map_professor/ClassroomSecond_Spritesheet-cop.png"
        );
        this.load.image(
            "POFS4",
            "./assets/map_professor/PrincipalOfficeSecondSpritesheet4.png"
        );
        this.load.image(
            "POSS4",
            "./assets/map_professor/strokespritesheet20125.png"
        );
        this.load.image(
            "WFD5",
            "./assets/map_professor/Wallfloordoorw_First_Spritesheet_5.png"
        );
        this.load.image(
            "SPS",
            "./assets/map_professor/strokespritesheet20121.png"
        );
        this.load.spritesheet(
            "BN",
            "./assets/img/conteudo/PERSONAGEM/george_0.png",
            {
                frameWidth: 92,
                frameHeight: 92,
            }
        );
    }

    create() {
        const map = this.make.tilemap({ key: "mapa" });

        const CFS1 = map.addTilesetImage(
            "Classroom_First_Spritesheet_1",
            "CFS1"
        );
        const CFS6 = map.addTilesetImage(
            "Classroom_First_Spritesheet_6",
            "CFS6"
        );
        const CPFSc = map.addTilesetImage(
            "Classroom_PropsFirst_Spritesheet-cop",
            "CPFSc"
        );
        const CPSP4 = map.addTilesetImage(
            "ClassroomPropsSecondSpritesheet4",
            "CPSP4"
        );
        const CSS7 = map.addTilesetImage("ClassroomSecondSpritesheet7", "CSS7");
        const CSSC = map.addTilesetImage(
            "ClassroomSecond_Spritesheet-cop",
            "CSSC"
        );
        const POFS4 = map.addTilesetImage(
            "PrincipalOfficeSecondSpritesheet4",
            "POFS4"
        );
        const SPS = map.addTilesetImage("strokespritesheet20125", "SPS");
        const WFD5 = map.addTilesetImage(
            "Wallfloordoorw_First_Spritesheet_5",
            "WFD5"
        );

        const chao = map.createLayer("chao", [SPS], 0, 0);
        const parede = map.createLayer("parede", [WFD5], 0, 0);
        const mesas_alunos = map.createLayer("mesas-alunos", [CFS1], 0, 0);
        const mesa_professor = map.createLayer("mesa-professor", [CFS6], 0, 0);
        const quadro = map.createLayer("quadro", [CPFSc], 0, 0);
        const giz = map.createLayer("giz", [CSS7], 0, 0);
        const decoracao = map.createLayer(
            "decoracao",
            [CFS1, CPSP4, CSSC],
            0,
            0
        );

        this.player = this.physics.add.sprite(800, 800, "BN");
        this.player.setCollideWorldBounds(true);
        this.player.setVelocity(0);

        mesas_alunos.setCollisionByExclusion([-1]);
        parede.setCollisionByExclusion([-1]);
        mesa_professor.setCollisionByExclusion([-1]);

        this.physics.add.collider(this.player, mesas_alunos);
        this.physics.add.collider(this.player, mesa_professor);

        this.physics.add.collider(this.player, parede);

        this.cursors = this.input.keyboard.createCursorKeys();
        const botaoplay = this.add.image(350, 50, "botaoplay").setInteractive();
        botaoplay.setInteractive({ useHandCursor: true });
        botaoplay.setDepth(100);
        botaoplay.setPosition(460, 100);

        botaoplay.on("pointerdown", () => {
            this.scene.start("Cena2");
        });

        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [0, 4, 8, 12],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [2, 6, 10, 14],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [1, 5, 9, 13],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [3, 7, 11, 15],
            }),
            frameRate: 10,
            repeat: -1,
        });
    }

    update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play("right", true);
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
            this.player.anims.play("up", true);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
            this.player.anims.play("down", true);
        } else {
            this.player.anims.stop();
        }
    }
}
