import OptionSystem from "./src/OptionSystem.js";
import Scenario from "./src/Scenario.js";
import StartMenu from "./src/StartMenu.js";
import VolumeSlider from "./src/VolumeSlider.js";

window.currentVideo = null;

let volumeSlider;

let selection1;
let selection2;
let selection3;

let gameover1;
let gameover2;
let gameover3;

let final1;
let final2;

let startMenu;

function setup() {
    createCanvas(900, 600);

    volumeSlider = new VolumeSlider();

    startMenu = new StartMenu({
        onStart: () => {
            selection1.start();
            startMenu.end();
        },
    });

    selection1 = new Scenario({
        initialVideo: createVideo("./assets/eleccion1.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Seguir caminando",
                    onClick: () => {
                        selection1.end();
                        final1.start();
                    },
                    xPosition: width * 0.2,
                    yPosition: height * 0.85,
                },
                {
                    content: "Ir a robar",
                    onClick: () => {
                        selection1.end();
                        selection2.start();
                    },
                    xPosition: width * 0.8,
                    yPosition: height * 0.85,
                },
            ],
        }),
    });

    selection2 = new Scenario({
        initialVideo: createVideo("./assets/eleccion2.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Ayudar a la señora",
                    onClick: () => {
                        selection2.end();
                        gameover2.start();
                    },
                    xPosition: width * 0.25,
                    yPosition: height * 0.8,
                    width: 200,
                },
                {
                    content: "Cruzar la calle",
                    onClick: () => {
                        selection2.end();
                        gameover1.start();
                    },
                    xPosition: width * 0.5,
                    yPosition: height * 0.8,
                },
                {
                    content: "Mirar hacia los lados",
                    onClick: () => {
                        selection2.end();
                        selection3.start();
                    },
                    xPosition: width * 0.75,
                    yPosition: height * 0.8,
                    width: 200,
                },
            ],
        }),
    });

    selection3 = new Scenario({
        initialVideo: createVideo("./assets/eleccion3.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Llevar en bolsa",
                    onClick: () => {
                        selection3.end();
                        final2.start();
                    },
                    xPosition: width * 0.28,
                    yPosition: height * 0.9,
                    width: 150,
                },
                {
                    content: "Cargar la caja fuerte",
                    onClick: () => {
                        selection3.end();
                        gameover3.start();
                    },
                    xPosition: width * 0.73,
                    yPosition: height * 0.9,
                    width: 150,
                },
            ],
        }),
    });

    final1 = new Scenario({
        initialVideo: createVideo("./assets/final1.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Volver a jugar",
                    onClick: () => {
                        location.reload();
                    },
                    xPosition: width * 0.5,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });

    final2 = new Scenario({
        initialVideo: createVideo("./assets/final2.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Volver a jugar",
                    onClick: () => {
                        location.reload();
                    },
                    xPosition: width * 0.5,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });

    gameover1 = new Scenario({
        initialVideo: createVideo("./assets/gameover1.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Reintentar",
                    onClick: () => {
                        gameover1.end();
                        selection2.start();
                    },
                    xPosition: width * 0.3,
                    yPosition: height * 0.7,
                },
                {
                    content: "Empezar desde cero",
                    onClick: () => location.reload(),
                    xPosition: width * 0.7,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });

    gameover2 = new Scenario({
        initialVideo: createVideo("./assets/gameover2.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Reintentar",
                    onClick: () => {
                        gameover2.end();
                        selection2.start();
                    },
                    xPosition: width * 0.3,
                    yPosition: height * 0.7,
                },
                {
                    content: "Empezar desde cero",
                    onClick: () => location.reload(),
                    xPosition: width * 0.7,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });

    gameover3 = new Scenario({
        initialVideo: createVideo("./assets/gameover3.mp4"),
        optionSystem: new OptionSystem({
            options: [
                {
                    content: "Reintentar",
                    onClick: () => {
                        gameover3.end();
                        selection3.start();
                    },
                    xPosition: width * 0.3,
                    yPosition: height * 0.7,
                },
                {
                    content: "Empezar desde cero",
                    onClick: () => location.reload(),
                    xPosition: width * 0.7,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });
}

function draw() {
    startMenu.draw();
    selection1.draw();
    selection2.draw();
    selection3.draw();
    gameover1.draw();
    gameover2.draw();
    gameover3.draw();
    final1.draw();
    final2.draw();

    volumeSlider.updateVolume();
}

window.setup = setup;
window.draw = draw;
