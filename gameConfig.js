var WINDOW_WIDTH = window.innerWidth,
    WINDOW_HEIGHT = window.innerHeight;
var game;

var config = {
    type: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? Phaser.CANVAS : Phaser.AUTO,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 1000 },
            debug: false,
        },
    },
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    scale: {
        mode: Phaser.Scale.RESIZE,
    },
    
    scene: [Preload, Scene1PlayGame],
    audio: {
        disableWebAudio: true,
    },
    input: {
        activePointers: 3,
    },
    roundPixels: false,
    pixelArt: true
};
game = new Phaser.Game(config);

