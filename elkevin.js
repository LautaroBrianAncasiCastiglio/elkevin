function setup() {
  createCanvas(800, 600);

  let video = createVideo("/video1.mp4");

  video.position(0, 0);
  video.size(800, 600);
  video.play();
}

function draw() {
  background(230);
}
