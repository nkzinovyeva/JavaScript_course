// 10.object_warm_up_1.js JavasScript code
// Initially, this program shows the name of a country.
// Modify the program so that it shows also the population of the country.

var country = {
    name: "Finland",
    population: 5501043
};

var outputText = country.name + " " + country.population;

document.getElementById("pOutput").innerHTML = outputText;

// End