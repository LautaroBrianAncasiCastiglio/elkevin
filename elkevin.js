let optionSystem1;
let scenario1;
let optionSystem2;
let scenario2;
let scenario1GameOver;
let scena3;
let botonPausa;
let slider;

function setup() {
    createCanvas(900, 600);

    botonPausa = new Pause();

    scenario1GameOver = new OptionSystem([
        {
            content: "Reiniciar",
            onClick: () => {
                scenario1.showInitialVideo();
                scenario1.hideInitialVideo();
            },
        },
        {
            content: "Volver al Menú",
            onClick: () => {
                location.reload();
            },
        },
    ]);

    optionSystem1 = new OptionSystem([
        {
            content: "Opcion 1",
            onClick: () => {
                scena3.showInitialVideo();
                scena3.hideInitialVideo();
            },
        },
        {
            content: "Opcion 2",
            onClick: () => {
            scenario2.showInitialVideo();
            scenario2.hideInitialVideo();
            },
        },
        {
            content: "Opcion 3",
            onClick: () => {
                location.reload();
            },
        },
    ]);

    optionSystem2 = new OptionSystem([
        {
            content: "bla",
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

    scenario2 = new Scenario({
        initialVideo: createVideo("./video1.mp4", () =>
            console.log("video 1 cargado")
        ),
        optionSystem: optionSystem2,
    });

    scena3 = new Scenario({
        initialVideo: createVideo("./video1.mp4", () =>
            console.log("video 1 cargado")
        ),
        optionSystem: scenario1GameOver,
    });

    scenario1.initialVideo.onended(() => {
        scenario1.showOptions();
    });
    scenario1.showInitialVideo();
    scenario1.hideInitialVideo();

    scenario2.initialVideo.onended(() => {
        scenario2.showOptions();
    });
    scenario2.hideInitialVideo();

    scena3.initialVideo.onended(() => {
        scena3.showOptions();
    });
    scena3.hideInitialVideo();

    //aca se configura el slider
    slider = createSlider(0, 1, 1,0.1);
    slider.position(50, 150);
    slider.value(0.5);
    slider.style('transform', 'rotate(270deg)');
    slider.style('height', 'height * 0.6');
    slider.style('width', 'width * 0.6');
}

let fun=1;
function draw() {
    background(230);
    let volume = slider.value();
    scenario1.initialVideo.volume(volume);
    scenario2.initialVideo.volume(volume);
    scena3.initialVideo.volume(volume);

    scenario1.draw();
    scenario2.draw();
    scena3.draw();
    botonPausa.showButtonPause();
}
