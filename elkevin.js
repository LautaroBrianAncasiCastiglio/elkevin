let isDone = false;

class Videos{
  //aqui se declara el nombre del 
  //video(para reconocer el tipo de video que hablamos)
  //y el link de este video y si se visualiza(1) o no(0)
  constructor(name, link, visualizar){
    this.name =name;
    this.link = createVideo(link, function(){console.log("video cargado")});
    this.visualizar = visualizar;
  }
  //esta sera la posicion de los videos
  posicion(){
    this.x = 440;
    this.y = 550;
  }
  //aca se muestra el video
  show(){
    if(this.visualizar == 1){
    this.link.position(0, 0);
    this.link.size(800, 600);
    this.link.time(10);
    this.link.play();
    this.link.time(55);
    this.visualizar = 0;}
  }

}


function setup() {
  createCanvas(800, 600);
  cargaVideos();
  /*let video = createVideo("./video1.mp4", () => console.log("loaded video"));

  video.position(0, 0);
  video.size(800, 600);
  video.play();
  video.time(55);

  video.onended(() => {
    video.hide();
    isDone = true;
  });*/
}
//es una variable de confirmacion
let val=2;

function draw() {
  background(230);

  /*if (isDone) {ellipse(width * 0.5, height * 0.5, 40, 40);
    if(val == 2){
      //cambia su valor a 1
    val = 1;}
  }*/
  
  videos.show();


}

function cargaVideos(){
  videos = new Videos("1", "./video1.mp4","1");
}
