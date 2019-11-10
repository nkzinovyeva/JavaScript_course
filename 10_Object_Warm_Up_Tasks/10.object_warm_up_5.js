// 10.object_warm_up_5.js JavasScript code

// This program retrieves library data from a web server (api.kirjastot.fi).
// The web server sends us the data in the JSON format (open the console window to see the details).
// Task 1: Modify the JavaScript code so that the program shows also the homepage address of the library.
// Task 2: Show the homepage address of the library as a link. Make sure that the link works properly.
// Note: Get the homepage address from the library object. Hint: See how the library name is retrieved in the code.

// --- This function sends a request to the server for library info.
function getLibraryInfo(libraryName) {
    var urlString =
        "https://api.kirjastot.fi/v3/organisation?with=schedules&period.start=today&period.end=today&name=" + libraryName;

    var libraryQuery = new XMLHttpRequest();
    libraryQuery.onreadystatechange = libraryQueryListener;
    libraryQuery.open("GET", urlString, true);
    libraryQuery.send();

    function libraryQueryListener() {
        if (libraryQuery.readyState === 4 && libraryQuery.status === 200) {
            console.log("The Library service returned the following JSON text: \n\n" + libraryQuery.responseText);
            showLibraryInfo(libraryQuery.responseText);
        }
    }
}

// --- This function parses the JSON text and shows the data on the web page.
function showLibraryInfo(jsonText) {

    var libraryObject = JSON.parse(jsonText); // Here we create a JavaScript object based on the JSON text.
    console.log(libraryObject);

    var outputText =
        libraryObject.items[0].name.en + "<br />" +
        libraryObject.items[0].address.street.en + "<br />" +
        libraryObject.items[0].address.zipcode + " " +
        libraryObject.items[0].address.city.en + "<br />" +
        (libraryObject.items[0].homepage.en).link(libraryObject.items[0].homepage.en) + "<br />";

    if (libraryObject.items[0].schedules[0].closed === true) {
        outputText += "The library is closed today";
    } else {
        outputText += "Opening times today: " +
            libraryObject.items[0].schedules[0].opens + " - " +
            libraryObject.items[0].schedules[0].closes;
    }

    document.getElementById("pOutput").innerHTML = outputText;
}

getLibraryInfo("Pasilan kirjasto");

// End