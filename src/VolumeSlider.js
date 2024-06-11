class VolumeSlider {
    constructor() {
        this.slider = createSlider(0, 1, 0.5, 0.1);
        this.slider.position(50, 150);
        this.slider.style("transform", "rotate(270deg)");
        this.slider.style("height", "height * 0.6");
        this.slider.style("width", "width * 0.6");
    }

    updateVolume() {
        if (window.backgroundAudio)
            window.backgroundAudio.volume(this.slider.value());
    }
}

export default VolumeSlider;
