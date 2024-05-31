let optionSystem1;
let scenario1;
let botonPausa;
let slider;

function setup() {
    createCanvas(900, 600);

    botonPausa = new Pause();

    optionSystem1 = new OptionSystem([
        {
            content: "Opcion 1",
            onClick: () => {
                console.log("11111111");
            },
        },
        {
            content: "Opcion 2",
            onClick: () => {},
        },
        {
            content: "Opcion 3",
            onClick: () => {
                console.log("333333");
            },
        },
    ]);

    scenario1 = new Scenario({
        initialVideo: createVideo("./video1.mp4", () =>
            console.log("video 1 cargado")
        ),
        optionSystem: optionSystem1,
    });

    scenario1.initialVideo.onended(() => {
        scenario1.showOptions();
    });

    scenario1.showInitialVideo();
    scenario1.hideInitialVideo();

    slider = createSlider(0, 1, 1,0.1);
    slider.position(-200, 100);
    slider.value(0.5);
    slider.style('transform', 'rotate(270deg)');
    slider.style('height', '600px');
    slider.style('width', '600px');
}
function draw() {
    background(230);
    scenario1.draw();
    let volume = slider.value();
    scenario1.initialVideo.volume(volume);
    botonPausa.showButtonPause();
}
