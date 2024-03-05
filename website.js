


//play sounds for dropdowns and confirming selections
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
    // If the audio element does not exist, create it
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = audioId;
        audioElement.controls = true; // Add controls so the user can play the audio
        document.body.appendChild(audioElement); // Append the audio element to the body or a specific container
    }
    // Update the source of the audio element
    audioElement.src = 'sounds/' + src; // Update the path accordingly
}

// Ensure this script runs after the document has loaded, or place the <script> tag at the end of the body

    document.getElementById('confirmSelection').addEventListener('click', prepareSoundFiles);