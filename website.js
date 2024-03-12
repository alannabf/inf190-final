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
  
  document.addEventListener('DOMContentLoaded', () => {
    // Adjust playback rate for the Bass track
    document.getElementById('bassPlaybackRate').addEventListener('input', function() {
        const bassAudio = document.getElementById('audioBass');
        if (bassAudio) {
            bassAudio.playbackRate = this.value;
        }
    });
  
    // Adjust playback rate for the Drums track
    document.getElementById('drumsPlaybackRate').addEventListener('input', function() {
        const drumsAudio = document.getElementById('audioDrums');
        if (drumsAudio) {
            drumsAudio.playbackRate = this.value;
        }
    });
  
    // Adjust playback rate for the Guitar track
    document.getElementById('guitarPlaybackRate').addEventListener('input', function() {
        const guitarAudio = document.getElementById('audioGuitar');
        if (guitarAudio) {
            guitarAudio.playbackRate = this.value;
        }
    });
  
    // Adjust playback rate for the Vocals track
    document.getElementById('vocalsPlaybackRate').addEventListener('input', function() {
        const vocalsAudio = document.getElementById('audioVocals');
        if (vocalsAudio) {
            vocalsAudio.playbackRate = this.value;
        }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Volume Adjustments
    document.getElementById('bassVolume').addEventListener('input', function() {
        adjustVolume('audioBass', this.value);
    });
    document.getElementById('drumsVolume').addEventListener('input', function() {
        adjustVolume('audioDrums', this.value);
    });
    document.getElementById('guitarVolume').addEventListener('input', function() {
        adjustVolume('audioGuitar', this.value);
    });
    document.getElementById('vocalVolume').addEventListener('input', function() {
        adjustVolume('audioVocals', this.value);
    });
  });
  
  function adjustVolume(audioId, volume) {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.volume = volume;
    }
  }
  
  document.getElementById('bassVolume').addEventListener('input', function() {
      const volume = this.value;
      adjustVolume('audioBass', volume);
      document.getElementById('bassVolumeValue').textContent = volume;
  });
  
  document.getElementById('drumsVolume').addEventListener('input', function() {
      const volume = this.value;
      adjustVolume('audioDrums', volume);
      document.getElementById('drumsVolumeValue').textContent = volume;
  });
  
  document.getElementById('guitarVolume').addEventListener('input', function() {
      const volume = this.value;
      adjustVolume('audioGuitar', volume);
      document.getElementById('guitarVolumeValue').textContent = volume;
  });
  
  document.getElementById('vocalVolume').addEventListener('input', function() {
      const volume = this.value;
      adjustVolume('audioVocals', volume);
      document.getElementById('vocalsVolumeValue').textContent = volume;
  });
  
  document.addEventListener('DOMContentLoaded', () => {
      // Update playback rate display for Bass
      document.getElementById('bassPlaybackRate').addEventListener('input', function() {
          const rate = this.value;
          document.getElementById('bassPlaybackRateValue').textContent = rate;
      });
  
      // Repeat for other tracks: Drums, Guitar, Vocals
      document.getElementById('drumsPlaybackRate').addEventListener('input', function() {
          document.getElementById('drumsPlaybackRateValue').textContent = this.value;
      });
      document.getElementById('guitarPlaybackRate').addEventListener('input', function() {
          document.getElementById('guitarPlaybackRateValue').textContent = this.value;
      });
      document.getElementById('vocalsPlaybackRate').addEventListener('input', function() {
          document.getElementById('vocalsPlaybackRateValue').textContent = this.value;
      });
  });
  
