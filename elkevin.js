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
//es una variable de confirmacion
let val=2;
function draw() {
  background(230);

  if (isDone) {ellipse(width * 0.5, height * 0.5, 40, 40);
    if(val == 2){
      //cambia su valor a 1
    val = 1;}
  }
  //si la variable es 1 entonces que reproduzca el video
  if(val == 1){
    let video2 = createVideo("./video1.mp4", () => console.log("loaded video"));
    video2.position(0, 0);
    video2.size(800, 600);
    video2.time(10);
    video2.play();
    ellipse(10,10,10,10);
    //deja de ser 1 y no se reproduce el video
    val = 0;
  }
}
