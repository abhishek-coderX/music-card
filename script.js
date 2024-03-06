let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctr = document.getElementById("ctr");
let intervalId;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause() {
    if (song.paused) {
        song.play();
        ctr.classList.add("ri-pause-circle-line");
        ctr.classList.remove("ri-play-circle-line");
        intervalId = setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    } else {
        song.pause();
        clearInterval(intervalId);
        ctr.classList.remove("ri-pause-circle-line");
        ctr.classList.add("ri-play-circle-line");
    }
}

progress.oninput = function() {
    song.pause();
    song.currentTime = progress.value;
    ctr.classList.add("ri-pause-circle-line");
    ctr.classList.remove("ri-play-circle-line");
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value; // 'currentTime' instead of 'CurrentTime'
    ctr.classList.add("ri-pause-circle-line");
    ctr.classList.remove("ri-play-circle-line");
}