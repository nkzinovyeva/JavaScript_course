// 04.06 JavasScript code

// This is a variable that will hold a reference to the earth map
var earth;

// This function creates and shows the earth map
function initializeEarthMap() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };

    earth = new WE.map("divEarth", options);

    WE.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(earth);
}

function goHome() {

    earth.setView([60.165711, 24.928227]); // Set the map center to the latitude / longitude position of your own home.

    earth.setZoom(18); // Zoom the map close enough.

}

function showCoords() {
    alert(earth.getCenter());
    // Show the current coordinates (latitude / longitude position) of the map center in an alert dialog box.

}

// The web browser executes the code below when the HTML page is loaded or refreshed. 
// The code below invokes the initializeEarthMap function. 
initializeEarthMap();