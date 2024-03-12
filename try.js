// Function to load and prepare sound files based on user selections
function prepareSoundFiles() {
    // Get user selections from dropdowns
    const bassSelection = document.getElementById('Bass').value.replace(/ /g, "_") + ".mp3";
    const drumsSelection = document.getElementById('Drums').value.replace(/ /g, "_") + ".mp3";
    const guitarSelection = document.getElementById('Guitar').value.replace(/ /g, "_") + ".mp3";
    const vocalsSelection = document.getElementById('Vocals').value.replace(/ /g, "_") + ".mp3";
    
    // Load specific audio file for each dropdown
    updateAudioSource('audioBass', bassSelection, 'audioContainerBass');
    updateAudioSource('audioDrums', drumsSelection, 'audioContainerDrums');
    updateAudioSource('audioGuitar', guitarSelection, 'audioContainerGuitar');
    updateAudioSource('audioVocals', vocalsSelection, 'audioContainerVocals');
}

// Function to update audio source and add it to the specified container
function updateAudioSource(audioId, src, containerId) {
    let audioElement = document.getElementById(audioId);
    let container = document.getElementById(containerId); // Get the specified container
    
    // If the audio element does not exist, create it
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = audioId;
        audioElement.controls = true;
        container.appendChild(audioElement); // Append to the specified container
    }
    audioElement.src = 'sounds/' + src;
}


// Check if the audio element has a source set
document.getElementById('startAll').addEventListener('click', function() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        if (audio.src) { 
        audio.play();
        }
    });
});

// Pause playback without resetting the position
document.getElementById('pauseAll').addEventListener('click', function() {
const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause(); 
        });
});