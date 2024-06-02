class Scenario {
    constructor({ initialVideo, optionSystem }) {
        this.initialVideo = initialVideo;
        this.optionSystem = optionSystem;
        this.initialVideo.hide();
    }

    start() {
        window.currentVideo = this.initialVideo;

        this.initialVideo.onended(() => {
            this.optionSystem.show();
        });

        this.initialVideo.play();
        this.initialVideo.time(60);
    }

    end() {
        this.optionSystem.hide();
    }

    draw() {
        image(this.initialVideo, 0, 0, width, height);
        this.optionSystem.draw();
    }
}

export default Scenario;
