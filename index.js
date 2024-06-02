import OptionSystem from "./src/OptionSystem.js";
import Scenario from "./src/Scenario.js";
import VolumeSlider from "./src/VolumeSlider.js";

window.currentVideo = null;

let volumeSlider;

let scenario1;
let scenario2;

function setup() {
    createCanvas(900, 600);

    volumeSlider = new VolumeSlider();

    scenario1 = new Scenario({
        initialVideo: createVideo("./video1.mp4", () =>
            console.log("video 1 cargado")
        ),
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
        initialVideo: createVideo("./video1.mp4", () =>
            console.log("video 2 cargado")
        ),
        optionSystem: new OptionSystem([
            { content: "Opcion 1", onClick: () => console.log("Opcion 111") },
            { content: "Opcion 2", onClick: () => console.log("Opcion 222") },
            { content: "Opcion 3", onClick: () => console.log("Opcion 333") },
        ]),
    });

    scenario1.start();
}

function draw() {
    background(230);
    scenario1.draw();
    scenario2.draw();
    volumeSlider.updateVolume();
}

window.setup = setup;
window.draw = draw;
