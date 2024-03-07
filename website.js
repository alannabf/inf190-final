// Function to load and prepare sound files based on user selections
function prepareSoundFiles() {
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
