class Pause{
    constructor(videopaused, buttonpause){
        this.buttonpause = buttonpause;
        this.videopaused = videopaused;
        this.x = 840;
        this.y = 60;
    }

    showButtonPause(){
        fill(255,0,0);
        let ep = ellipse(this.x,this.y,100,100);
    }
}