
const play = document.getElementById("play");
const music = document.getElementById("music")
const rangeInput=document.getElementById("range-input")

play.addEventListener(("click"),(e)=>{
    if (music.paused){
        music.play();
    }else {
        music.pause();
    }
})

music.addEventListener('loadedmetadata', function() {
    // console.log(music.currentTime)
    let minutes = Math.floor((music.duration) / 60);
    let remainingSeconds = Math.floor(music.duration) % 60;
    document.getElementById("duration").innerText=`${minutes}:${remainingSeconds}`;
});

music.addEventListener("timeupdate",()=>{
    // console.log(music.currentTime)
    let minutes = Math.floor((music.currentTime) / 60);
    let remainingSeconds = Math.floor(music.currentTime % 60);
    if (remainingSeconds<10){
        remainingSeconds="0".concat(String(remainingSeconds))
    }
    document.getElementById("left-time").innerText=`${minutes}:${remainingSeconds}`;
    if (Math.floor((music.currentTime/music.duration)*1000)){
        rangeInput.value=Math.floor((music.currentTime/music.duration)*1000);
    }
})

rangeInput.addEventListener("input",()=>{
    music.currentTime=Math.floor((rangeInput.value/1000)*music.duration);
})

