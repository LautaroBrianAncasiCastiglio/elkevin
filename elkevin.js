let isDone = false;

function setup() {
  createCanvas(800, 600);
  let video = createVideo("./video1.mp4", () => console.log("loaded video"));

  video.position(0, 0);
  video.size(800, 600);
  video.autoplay();
  video.time(55);

  video.onended(() => {
    video.hide();
    isDone = true;
  });
}

function draw() {
  background(230);

  if (isDone) ellipse(width * 0.5, height * 0.5, 40, 40);
}
