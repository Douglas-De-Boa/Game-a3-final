class Cena1 extends Phaser.Scene {
    constructor() {
        super({ key: "Cena1" });
    }

    preload() {
        this.load.image("bgC1", "./assets/img/conteudo/Background/back2.png");
        this.load.image("bPF", "./assets/img/conteudo/BOTÃO/professor.png");
    }

    create() {
        this.add.image(480, 480, "bgC1");

        const professorButton = this.add
            .image(470, 400, "bPF")
            .setInteractive();
        professorButton.setScale(0.3);
        this.add
            .text(400, 150, "Escolha sua profissão:", {
                fontSize: "32px",
                color: "#ffffff",
            })
            .setOrigin(0.5);

        professorButton.on("pointerover", () => {
            professorButton.setScale(0.28);
        });

        professorButton.on("pointerout", () => {
            professorButton.setScale(0.3);
        });

        professorButton.on("pointerdown", () => {
            professorButton.setScale(0.27);
        });

        professorButton.on("pointerup", () => {
            professorButton.setScale(0.3);
            this.scene.start("CenaPF");
        });
    }
}
