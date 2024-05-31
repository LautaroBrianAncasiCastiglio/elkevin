let optionSystem1;
let scenario1;
let botonPausa;
let slider;
function setup() {
    createCanvas(900, 600);

    gui = createGui();
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
}

let fun=1;
function draw() {
    background(230);
    drawGui();
    scenario1.draw();
    botonPausa.showButtonPause();
}
