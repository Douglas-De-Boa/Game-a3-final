class MenuState extends Phaser.Scene {
    constructor() {
        super({ key: "menuState" });
    }

    preload() {
        this.load.image("bg", "./assets/img/conteudo/Background/back1.png");
        this.load.image(
            "playButton",
            "./assets/img/conteudo/BOTÃO/BOTÃO_PLAY.png"
        );
    }

    create() {
        this.add.image(480, 480, "bg");

        const playButton = this.add
            .image(470, 400, "playButton")
            .setInteractive();
        playButton.setScale(0.5);

        playButton.on("pointerover", () => {
            playButton.setScale(0.45);
        });

        playButton.on("pointerout", () => {
            playButton.setScale(0.3);
        });

        playButton.on("pointerdown", () => {
            playButton.setScale(0.3);
        });

        playButton.on("pointerup", () => {
            playButton.setScale(0.3);
            this.scene.start("Cena1");
        });

        this.input.keyboard.on("keydown-ENTER", () => {
            this.scene.start("Cena1");
        });
    }
}
