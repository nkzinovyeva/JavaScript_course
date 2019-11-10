// 08.05 JavasScript code

function showWeightGoals() {
    var weight = Number(document.getElementById("txtWeight").value); // Read the original weight to a variable.
    var loose = weight * 0.1 / 7; // Calculate how many kgs one should get lighter each week = weight * 0.1 / 7
    outputText = ""; // Initialize output text variable to start from empty text: "" 
    // It will be used later to gather all the output lines. (String can hold also line breaks) 

    for (var i = 1; i <= 7; i++) {
        weight = weight - loose; // Give the weight variable a new value.
        outputText += "After " + i + " week " + weight.toFixed(1) + " kg. <br>" // Add this week’s text + line break to the output text variable 
    }

    document.getElementById("pOutput").innerHTML = outputText; // Write the whole output text to the HTML page at once

}