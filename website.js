
// Play/pause button
const playPauseButton = document.getElementById('playPauseButton');
const audio = new Audio() //enter a specific song in parenthesis; need to figure out 

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        playPauseButton.textContent = "Play";
        audio.play();
    } else {
        playPauseButton.textContent = "Pause";
        audio.pause();
    }
    isPlaying = !isPlaying;
}

playPauseButton.addEventListener('click', togglePlayPause);