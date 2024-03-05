const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('audio-player');
const wavesurfer = WaveSurfer.create({
    container: '#waveform', 
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    backend: 'MediaElement',
    mediaControls: true,
    mediaType: 'audio',
    responsive: true
});

let isPlaying = false;



//play pause for waves

function togglePlayPause() {
    if (isPlaying) {
        playPauseButton.textContent = "Play";
        audio.pause(); // Pause the audio
        wavesurfer.pause(); // Pause the WaveSurfer visualization
    } else {
        playPauseButton.textContent = "Pause";
        audio.play(); // Play the audio
        wavesurfer.play(); // Play the WaveSurfer visualization
    }
    // Toggle the playing state
    isPlaying = !isPlaying;
}

playPauseButton.addEventListener('click', togglePlayPause);

wavesurfer.load('sounds/kalachashma_drums.mp3'); // Load your audio file
wavesurfer.on('ready', function () {
    wavesurfer.play(); // Auto-play the waveform visualization when ready
});
