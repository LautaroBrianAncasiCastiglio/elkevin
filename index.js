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
                    content: "Opcion 1",
                    onClick: () => console.log("Opcion 111"),
                    xPosition: width
                },
                {
                    content: "Opcion 2",
                    onClick: () => console.log("Opcion 222"),
                },
                {
                    content: "Opcion 3",
                    onClick: () => console.log("Opcion 333"),
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
                        window.location.reload();
                    },
                    xPosition: width * 0.5,
                    yPosition: height * 0.7,
                },
            ],
        }),
    });
}

function draw() {
    background(230);
    startMenu.draw();
    selection1.draw();
    selection2.draw();
    // selection3.draw();
    // gameover1.draw();
    // gameover2.draw();
    // gameover3.draw();
    final1.draw();
    // final2.draw();

    volumeSlider.updateVolume();
}

window.setup = setup;
window.draw = draw;
