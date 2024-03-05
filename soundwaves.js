const wavesurfer = WaveSurfer.create({
    container: '#waveform', 
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    backend: 'MediaElement',
    mediaControls: true,
    mediaType: 'audio',
    responsive: true
  })
  
  wavesurfer.load('sounds/kalachashma_drums.mp3'); // your audio file
  
  wavesurfer.on('ready', function () {
    wavesurfer.play();
  });
  
