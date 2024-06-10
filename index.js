import OptionSystem from "./src/OptionSystem.js";
import Scenario from "./src/Scenario.js";
import StartMenu from "./src/StartMenu.js";
import VolumeSlider from "./src/VolumeSlider.js";

window.currentVideo = null;

let volumeSlider;

let scenario1;
let scenario2;

let startMenu;

function setup() {
    createCanvas(900, 600);

    volumeSlider = new VolumeSlider();

    startMenu = new StartMenu({
        onStart: () => {
            scenario1.start();
            startMenu.end();
        }
    })

    scenario1 = new Scenario({
        initialVideo: createVideo("./assets/video1.mp4"),
        optionSystem: new OptionSystem([
            { content: "Opcion 1", onClick: () => console.log("Opcion 111") },
            {
                content: "Opcion 2",
                onClick: () => {
                    scenario1.end();
                    scenario2.start();
                },
            },
            { content: "Opcion 3", onClick: () => console.log("Opcion 333") },
        ]),
    });

    scenario2 = new Scenario({
        initialVideo: createVideo("./assets/video1.mp4"),
        optionSystem: new OptionSystem([
            { content: "Opcion 1", onClick: () => console.log("Opcion 111") },
            { content: "Opcion 2", onClick: () => console.log("Opcion 222") },
            { content: "Opcion 3", onClick: () => console.log("Opcion 333") },
        ]),
    });
}

function draw() {
    background(230);
    startMenu.draw();
    scenario1.draw();
    scenario2.draw();
    volumeSlider.updateVolume();
}

window.setup = setup;
window.draw = draw;
