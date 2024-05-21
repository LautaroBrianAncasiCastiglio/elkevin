let optionSystem1;
let scenario1;

function setup() {
    createCanvas(900, 600);

    optionSystem1 = new OptionSystem([
        {
            content: "Opcion 1",
            onClick: () => {
                console.log("11111111");
            },
        },
        {
            content: "Opcion 2",
            onClick: () => {
                console.log("22222");
            },
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
    scenario1.showInitialVideo();
    scenario1.showOptions();
}

function draw() {
    background(230);
    scenario1.draw();
}
