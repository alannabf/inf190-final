<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <div class="header">
        <!-- title -->
        <h1>Make Music!</h1>
    </div>

<!-- Selecting song -->
    <div class="SongSelection">
 
        <h3>Select Songs:</h3> 

        <!--choose bass-->
        <div class="Songs">
            <label for="SongSelection">Choose a Bass:</label>
            <select name="Bass" id="Bass">
                <option value="kalachashma_bass">Kala Chashma Bass</option> <!--Kala Chashma_Bass_mixed.mp3-->
                <option value="sprinter_bass">Sprinter Bass</option>
                <option value="runaway_bass">Runaway Bass</option>
                <option value="lovestory_bass">Love Story Bass</option>
                <option value="dshstar_bass+other">Dashstar Bass</option>
                <option value="None">None</option>
            </select>
        </div>

        <!--choose drums-->
        <div class="Songs">
            <label for="SongSelection">Choose a Drums:</label>
            <select name= "Drums" id="Drums">
                <option value="kalachashma_drums">Kala Chashma Drum</option> <!--Kala Chashma_Drums_mixed.mp3-->
                <option value="sprinter_drums">Sprinter Drum</option>
                <option value="runaway_drums">Runaway Drum</option>
                <option value="lovestory_drums">Love Story Drum</option>
                <option value="dshstar_drums">Dashstar Drum</option>
                <option value="myeyes_drums">My Eyes Drum</option>
                <option value="None">None</option>
            </select>
        </div>

        <!--choose guitar-->
        <div class="Songs">
            <label for="SongSelection">Choose a Guitar/Piano:</label>
            <select name="Guitar/Piano" id="Guitar">
                <option value="kalachashma_guitar+other">Kala Chashma Guitar</option> <!--Kala Chashma_Drums_mixed.mp3-->
                <option value="sprinter_guitar">Sprinter Guitar</option>
                <option value="runaway_piano+other">Runaway Piano</option>
                <option value="lovestory_guitar+others">Love Story Guitar</option>
                <option value="myeyes_piano">My Eyes Piano</option>
                <option value="None">None</option>
            </select>
        </div>

        <div class="Songs">
        <!--choose Vocals-->
            <label for="SongSelection">Choose a Vocals:</label>
            <select name="Vocals" id="Vocals">
                <option value="kalachashma_vocals">Kala Chashma Vocals</option> <!--Kala Chashma_Drums_mixed.mp3-->
                <option value="sprinter_vocals">Sprinter Vocals</option>
                <option value="runaway_vocals">Runaway Vocals</option>
                <option value="lovestory_vocals">Love Story Vocals</option>
                <option value="dshstar_vocals">Dashstar Vocals</option>
                <option value="myeyes_vocals">My Eyes Vocals</option>
                <option value="None">None</option>
            </select>
        </div>
        <!-- Existing HTML elements for sound selection -->

    <!-- Insert the Confirm Selection Button after the dropdowns -->
    <div class="button">
        <button id="confirmSelection">Confirm Selection</button>
        <button id="startAll">Start All</button>
        <button id="pauseAll">Pause All</button>
    </div>  

    <div class="container">
        <div id="audioContainer">
            <label for="bassPlaybackRate">Bass Playback Rate:</label>
            <input type="range" id="bassPlaybackRate" min="0.25" max="2.5" value="1" step="0.01">
            <span id="bassPlaybackRateValue">1</span>
            <label for="drumsPlaybackRate">Drums Playback Rate:</label>
            <input type="range" id="drumsPlaybackRate" min="0.25" max="2.5" value="1" step="0.01">
            <span id="drumsPlaybackRateValue">1</span>
            <label for="guitarPlaybackRate">Guitar/Piano Playback Rate:</label>
            <input type="range" id="guitarPlaybackRate" min="0.25" max="2.5" value="1" step="0.01">
            <span id="guitarPlaybackRateValue">1</span>
            <label for="vocalsPlaybackRate">Vocals Playback Rate:</label>
            <input type="range" id="vocalsPlaybackRate" min="0.25" max="2.5" value="1" step="0.01">
            <span id="vocalsPlaybackRateValue">1</span>
        </div>
        <div id="audioContainer2">
            <label for="bassVolume">Bass Volume:</label>
            <input type="range" id="bassVolume" min="0" max="1" step="0.01" value="1">
            <span id="bassVolumeValue">1</span>
            <label for="drumsVolume">Drums Volume:</label>
            <input type="range" id="drumsVolume" min="0" max="1" step="0.01" value="1">
            <span id="drumsVolumeValue">1</span>
            <label for="guitarVolume">Guitar/Piano Volume:</label>
            <input type="range" id="guitarVolume" min="0" max="1" step="0.01" value="1">
            <span id="guitarVolumeValue">1</span>
            <label for="vocalVolume">Vocals Volume:</label>
            <input type="range" id="vocalVolume" min="0" max="1" step="0.01" value="1">
            <span id="vocalsVolumeValue">1</span>
        </div>
    </div>
    



    

    <script src="website.js"></script>
   
    </div>
    <!-- Existing script for drawing sound waves -->


</body>



</html>
