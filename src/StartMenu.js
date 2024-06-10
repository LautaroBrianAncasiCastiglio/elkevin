class StartMenu {
    #visible = true;
    image = loadImage('../assets/rb20.jpg')
    
    constructor({onStart}) {
        this.onStart = onStart;
        this.button = new Button({
            x: width * 0.5,
            y: height * 0.8,
            align_x: 0,
            width: 150,
            height: 50,
            content: 'Comenzar',
            on_press: this.onStart
        })
        
        this.button.style("default", {
            text_size: 16,
            background: "#0e04a1",
            color: "#ffffff",
        });
    }

    end() {
        this.#visible = false;
    }

    draw() {
        if (!this.#visible) return;
        background(this.image)
        this.button.draw()
    }
}

export default StartMenu