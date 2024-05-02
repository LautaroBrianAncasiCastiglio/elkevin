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
    if(width >= 1500){
    this.link.position(width*0.25,height*0.0119);}
    else{this.link.position(-width*0.05,height*0.0119);}
    this.link.size(1000, 700);
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

class Opciones{
  constructor(x, y, numOpcion, texto, imagen, linkVideo){
    this.x = width*x;
    this.y = height*y;
    this.numero = numOpcion;
    this.texto = texto;
    this.imagen = imagen;
    this.video = linkVideo;
  }
  mostrar(){
    fill(0);
    ellipse(this.x,this.y,100,100);
  }
}

function setup() {
  createCanvas(1000, 700);
  cargaVideos();
  cargarOpciones();
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
    videos2.visualizar = 0;
    videos1.link.hide();
  });
  videos2.mostrar();
  //no se van a mostrar porque su contador es 0
  videos3.mostrar();
  videos4.mostrar();

  opcion1.mostrar();
  fill(200);
  ellipse(width*0.25,height*0.35,100,100);
  ellipse(width*0.50,height*0.55,100,100);
  ellipse(width*0.75,height*0.35,100,100);
 
}

function cargarOpciones(){
  // posicionX , posicionY, numero de opcion, link de imagen, link de la clase video
  opcion1 = new Opciones("0.25","0.55","1","opcion","./cat.png","videos1");

}

function cargaVideos(){
  //                nombre, link del video  ,1 o 0 para visualizar el video
  videos1 = new Videos("1", "./video1.mp4","1");
  videos2 = new Videos("1", "./video1.mp4","0");
  videos3 = new Videos("1", "./video1.mp4","0");
  videos4 = new Videos("1", "./video1.mp4","0");
}
