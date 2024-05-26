class Scenario {
    constructor({ initialVideo, optionSystem }) {
        this.initialVideo = initialVideo;
        this.optionSystem = optionSystem;
    }

    showOptions() {
        this.optionSystem.showOptionsInScreen();
    }

    showInitialVideo() {
        showBackgroundVideo(this.initialVideo);
    }

    hideInitialVideo() {
        hideBackgroundVideo(this.initialVideo);
    }

    draw() {
        image(this.initialVideo, 0, 0, width, height);
        this.optionSystem.drawOptions();
    }
}
