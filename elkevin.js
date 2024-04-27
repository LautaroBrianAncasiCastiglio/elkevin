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
  mostrar(){
    if(this.visualizar == 1){
    this.link.show();
    this.link.position(0, 0);
    this.link.size(800, 600);
    this.link.time(10);
    this.link.play();
    this.link.time(55);
    this.visualizar = 2;}
    //si el video no esta reproduciendoce entonces que no se muestre
    else if(this.visualizar == 0){
    this.link.hide();}
    //si termino la reproduccion entonces que no se muestre (no funciona ahora)
    this.link.onended(() => {this.link.hide()});
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

  if (isDone) {ellipse(10, 10, 40, 40);
  }
  
  videos1.mostrar();
  //cuando el video1 termine se escondera y mostrara el video 2
  videos1.link.onended(() => {
    videos2.visualizar = 1;
  });
  videos2.mostrar();
  //no se van a mostrar porque su contador es 0
  videos3.mostrar();
  videos4.mostrar();


}

function cargaVideos(){
  videos1 = new Videos("1", "./video1.mp4","1");
  videos2 = new Videos("1", "./video1.mp4","0");
  videos3 = new Videos("1", "./video1.mp4","0");
  videos4 = new Videos("1", "./video1.mp4","0");
}
