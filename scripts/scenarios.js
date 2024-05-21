class Scenario{
    constructor({initialVideo, opciones}){
        this.initialVideo = initialVideo;
    }

    showInitialVideo(){
        showBackgroundVideo(this.initialVideo);
    }
    
}