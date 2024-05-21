function setup() {
    createCanvas(900, 600);

    const escenariosss = new Scenario({
      initialVideo: createVideo("./video1.mp4", () => console.log("video 1 cargado")),
    }
    
    )

    escenariosss.showInitialVideo();
}


function draw() {
    background(230);
}
