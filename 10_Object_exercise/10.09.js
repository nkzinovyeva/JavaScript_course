// 10.09 JavasScript code

// This function fetches JSON data asynchronously from Internet using an AJAX call.
function fetchWeatherInfo() {
    var urlString = "http://api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&APPID=32f1264bba3945837fa37cc1c29b4db1";

    var weatherQuery = new XMLHttpRequest(); // We use an XMLHttpRequest object for the data communication
    weatherQuery.onreadystatechange = weatherQueryListener; // Set the event-listener function that handles the server's response
    weatherQuery.open("GET", urlString, true); // Set the URL where the request is to be sent
    weatherQuery.send(); // Send the request to the server

    // This inner function is the event handler that will called when a response is received from the weather service.
    // Note: This function can acces all the variables defined in the outer function.
    function weatherQueryListener() {
        if (weatherQuery.readyState === 4 && weatherQuery.status === 200) {
            console.log("The weather service returned the following JSON string: \n\n" + weatherQuery.responseText);
            showWeatherInfo(weatherQuery.responseText);
        }
    }
}

// This function parses the JSON string and shows the data (description, temperature, wind speed, cloud %) on the web page.
function showWeatherInfo(jsonText) {

    var weatherObject = JSON.parse(jsonText);
    console.log(weatherObject);

    var outputText =
        weatherObject.weather[0].description + "<br/>Temperature: " +
        weatherObject.main.temp + "<br/>Wind (m/s): " +
        weatherObject.wind.speed + "<br/> Clouds (%): " +
        weatherObject.clouds.all;

    document.getElementById("divOutput").innerHTML = outputText;
}

fetchWeatherInfo();