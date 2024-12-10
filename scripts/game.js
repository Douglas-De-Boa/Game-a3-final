const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 960,
    scene: [MenuState, Cena1, CenaPF, Cena2],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
};
const game = new Phaser.Game(config);
