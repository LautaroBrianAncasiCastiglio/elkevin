class Scenario {
    #visible = false;

    constructor({ initialVideo, optionSystem }) {
        this.initialVideo = initialVideo;
        this.optionSystem = optionSystem;
        this.initialVideo.hide();
    }

    start() {
        this.#visible = true;
        window.currentVideo = this.initialVideo;

        this.initialVideo.onended(() => {
            this.optionSystem.show();
        });

        this.initialVideo.play();
        this.initialVideo.time(60);
    }

    end() {
        this.optionSystem.hide();
        this.#visible = false;
    }

    draw() {
        if (!this.#visible) return;
        image(this.initialVideo, 0, 0, width, height);
        this.optionSystem.draw();
    }
}

export default Scenario;
