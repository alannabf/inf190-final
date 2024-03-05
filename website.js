
<script>

document.addEventListener("", function() {
    // This function will be called when the DOM is fully loaded
    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = "Hello, JavaScript!";
};

let aud = document.getElementById("myAudio");
aud.onplay = function() {
    alert("The audio has started to play");
};

</script>