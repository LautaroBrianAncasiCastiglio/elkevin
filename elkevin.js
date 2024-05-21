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

let option1;
let option4;

function loadOptions() {
    option1 = new Rectangle({
        x: 400,
        y: 200,
        width: 200,
        height: 100,
    });
}

function setup() {
    createCanvas(900, 600);
    loadOptions();
    loadVideos();
    cargarOpciones();
    img = loadImage("./cat.jpg");

    hideVideos();

    //cuando el video1 termine se escondera y mostrara el video 2
    video1.onended(() => {
        video1.hide();
        showBackgroundVideo(video2);
    });

    video2.onended(() => {
        video2.hide();
    });
}

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
}

function cargarOpciones() {
    // posicionX , posicionY, numero de opcion, nombre, boton, link de imagen, link de la clase video
    opcion1 = new Opcion("0.25", "0.55", "1", "opcion", "./cat.jpg", "videos1");
    opcion2 = new Opcion("0.50", "0.35", "1", "opcion", "./cat.jpg", "videos1");
    opcion3 = new Opcion("0.75", "0.55", "1", "opcion", "./cat.jpg", "videos1");
}
