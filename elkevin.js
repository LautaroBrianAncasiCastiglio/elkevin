class Rectangle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getTop() {
    return this.y;
  }

  getBottom() {
    return this.y + this.height;
  }

  getRight() {
    return this.x + this.width;
  }

  getLeft() {
    return this.x;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}

function checkIsClicked(element, callback) {
  if (
    mouseY >= element.getTop() &&
    mouseY <= element.getBottom() &&
    mouseX >= element.getLeft() &&
    mouseX <= element.getRight()
  ) {
    callback();
  }
}

class Video {
  //aqui se declara el nombre del
  //video(para reconocer el tipo de video que hablamos)
  //y el link de este video y si se visualiza(1) o no(0)
  constructor(name, link, visualizar) {
    this.name = name;
    this.videoElement = createVideo(link, () => console.log("video cargado"));
    this.visualizar = visualizar;
  }
  //aca se muestra el video
  mostrar() {
    if (this.visualizar == 1) {
      //activa la visualizacion del video
      this.videoElement.show();
      //es la posicion del video
      this.videoElement.position(width * 0.25, height * 0.014);
      //el tamaño que ocupa en la pantalla
      this.videoElement.size(900, 600);
      //activa la reproduccion del video
      this.videoElement.play();
      //es el tiempo en el que comienza el video
      this.videoElement.time(55);
    }
    //si el video no esta reproduciendoce entonces que no se muestre
    else if (this.visualizar == 0) {
      //el video no se visualizara
      this.videoElement.hide();
    }
  }
}

class Opcion {
  constructor(x, y, numOpcion, texto, boton, imagen, linkVideo) {
    this.x = width * x;
    this.y = height * y;
    this.numero = numOpcion;
    this.texto = texto;
    this.boton = boton;
    this.imagen = createImg(imagen);
    this.video = linkVideo;
  }
  mostrar() {
    fill(0);
    ellipse(this.x, this.y, 100, 100);
    image(img, this.x - 50, this.y - 50);
  }
}

let video1;
let video2;

let option1;
let option4;

function loadOptions() {
  option1 = new Rectangle({
    x: 400,
    y: 200,
    width: 200,
    height: 100,
  });

  option4 = new Rectangle({
    x: width * 2,
    y: height * 2,
    width: 200,
    height: 50,
  });
}

function loadVideos() {
  video1 = createVideo("./video1.mp4", () => console.log("video 1 cargado"));
  video2 = createVideo("./video1.mp4", () => console.log("video 2 cargado"));
}

function loadOptions() {
  option1 = new Rectangle({
    x: 400,
    y: 200,
    width: 200,
    height: 100,
  });

  option4 = new Rectangle({
    x: width * 2,
    y: height * 2,
    width: 200,
    height: 50,
  });
}

function loadVideos() {
  video1 = createVideo("./video1.mp4", () => console.log("video 1 cargado"));
  video2 = createVideo("./video1.mp4", () => console.log("video 2 cargado"));
}

function setup() {
  createCanvas(900, 600);
  loadOptions();
  loadVideos();
  cargarOpciones();
  img = loadImage("./cat.jpg");

  video1.hide();
  video2.hide();

  //cuando el video1 termine se escondera y mostrara el video 2
  video1.onended(() => {
    video1.hide();
    showBackgroundVideo(video2);
  });

  video2.onended(() => {
    video2.hide();
  });
}

function showBackgroundVideo(video) {
  video.show();
  video.position(width * 0.25, height * 0.014);
  video.size(900, 600);
  video.play();
  video.time(55);
}

//es una variable de confirmacion
let val = 2;
let x = 0.25;
let y = 0.35;
                                                                                  //obsidian
function draw() {
  background(230);

  if (mouseIsPressed) {
    checkIsClicked(option1, () => {
      option1.x = width * 2;
      option1.y = height * 2;
      showBackgroundVideo(video1);
    });
  }

  option1.draw();
  option4.draw();
}

function cargarOpciones() {
  // posicionX , posicionY, numero de opcion, nombre, boton, link de imagen, link de la clase video
  opcion1 = new Opcion("0.25", "0.55", "1", "opcion", "./cat.jpg", "videos1");
  opcion2 = new Opcion("0.50", "0.35", "1", "opcion", "./cat.jpg", "videos1");
  opcion3 = new Opcion("0.75", "0.55", "1", "opcion", "./cat.jpg", "videos1");
}

function cargaVideos() {
  // nombre, link del video  ,1 o 0 para visualizar el video
  videos1 = new Video("1", "./video1.mp4", "0");
}
