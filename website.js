<<<<<<< HEAD

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

//play sounds for dropdowns and confirming selections
 // Function to load and prepare sound files based on user selections
 function prepareSoundFiles() {
=======
// Function to load and prepare sound files based on user selections
function prepareSoundFiles() {
>>>>>>> 2cb7366908912c797b713c597deea5062e884952
    // Get user selections from dropdowns
    const bassSelection = document.getElementById('Bass').value.replace(/ /g, "_") + ".mp3";
    const drumsSelection = document.getElementById('Drums').value.replace(/ /g, "_") + ".mp3";
    const guitarSelection = document.getElementById('Guitar').value.replace(/ /g, "_") + ".mp3";
    const vocalsSelection = document.getElementById('Vocals').value.replace(/ /g, "_") + ".mp3";
    
    // Function to create or update audio elements for the selected files
    updateAudioSource('audioBass', bassSelection);
    updateAudioSource('audioDrums', drumsSelection);
    updateAudioSource('audioGuitar', guitarSelection);
    updateAudioSource('audioVocals', vocalsSelection);
}


function updateAudioSource(audioId, src) {
        let audioElement = document.getElementById(audioId);
        let container = document.getElementById('audioContainer'); // Get the container
        // If the audio element does not exist, create it
        if (!audioElement) {
            audioElement = document.createElement('audio');
            audioElement.id = audioId;
            audioElement.controls = true;
            container.appendChild(audioElement); // Append to the container
        }
        audioElement.src = 'sounds/' + src;
    }

// Ensure this script runs after the document has loaded, or place the <script> tag at the end of the body

    document.getElementById('confirmSelection').addEventListener('click', prepareSoundFiles);

    document.getElementById('startAll').addEventListener('click', function() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        if (audio.src) { // Check if the audio element has a source set
            audio.play();
        }
    });
});

    document.getElementById('pauseAll').addEventListener('click', function() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause(); // Pause playback without resetting the position
    });
});

function startAllPlayers() {
    Object.values(players).forEach(player => player.start());
}

function stopAllPlayers() {
    Object.values(players).forEach(player => {
        player.stop();
        player.seek(0);
    });
}

function setPlaybackRate(rate) {
    Object.values(players).forEach(player => player.playbackRate = rate);
}
