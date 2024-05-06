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
  //aca se muestra el video
  mostrar(){
    if(this.visualizar == 1){
    //activa la visualizacion del video
    this.link.show();
    //es la posicion del video
    this.link.position(width*0.25,height*0.014);
   //el tamaño que ocupa en la pantalla 
    this.link.size(900, 600);
    //activa la reproduccion del video
    this.link.play();
    //es el tiempo en el que comienza el video
    this.link.time(55);
    //deja de reproducirce
    this.visualizar = 2;}
    //si el video no esta reproduciendoce entonces que no se muestre
    else if(this.visualizar == 0){
    //el video no se visualizara
    this.link.hide();}
  }

}

class Opciones{
  constructor(x, y, numOpcion, texto, boton, imagen, linkVideo){
    this.x = width*x;
    this.y = height*y;
    this.numero = numOpcion;
    this.texto = texto;
    this.boton = boton;
    this.imagen = imagen;
    this.video = linkVideo;
  }
  mostrar(){
    fill(0);
    let button = this.boton;
    button = createButton(this.texto);
    button.position(this.x, this.y);
  }
}

function setup() {
  createCanvas(900, 600);
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
let x=0.25;
let y=0.35;
function draw() {
  background(230);

  if (isDone) {ellipse(10, 10, 40, 40);
  }
  //mide la distancia entre el objeto negro y el mouse
  let distance = dist(mouseX,mouseY, opcion1.x, opcion1.y);
  
  

  //hace que la clase muestre el video
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

  //aparece una de las opciones
  //opcion1.mostrar();
  //option1.
  let boton = createButton("peeerquin");
  boton.position(300,300);
  boton.mousePressed(pe);
  //fill(200);
  ellipse(width*0.25,height*0.35,100,100);
  ellipse(width*0.50,height*0.55,100,100);
  ellipse(width*0.75,height*0.35,100,100);
 
}

function pe(){
  fill(0);
  if(mouseIsPressed === true){
    
  }
}

function cargarOpciones(){
  // posicionX , posicionY, numero de opcion, nombre, boton, link de imagen, link de la clase video
  opcion1 = new Opciones("0.25","0.55","1","opcion","./cat.png","videos1");

}

function cargaVideos(){
  //                nombre, link del video  ,1 o 0 para visualizar el video
  videos1 = new Videos("1", "./video1.mp4","0");
  videos2 = new Videos("1", "./video1.mp4","0");
  videos3 = new Videos("1", "./video1.mp4","0");
  videos4 = new Videos("1", "./video1.mp4","0");
}
