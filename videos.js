
let video1;
let video2;

function loadVideos() {
  video1 = createVideo("./video1.mp4", () => console.log("video 1 cargado"));
  video2 = createVideo("./video1.mp4", () => console.log("video 2 cargado"));
}

function hideVideos(){
  video1.hide();
  video2.hide();
}

function showBackgroundVideo(video) {
    video.show();
    video.position(width * 0.25, height * 0.014);
    video.size(900, 600);
    video.play();
    video.time(55);
}
  
  

  