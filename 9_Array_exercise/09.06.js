// 09.06 JavasScript code

var rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6]; // Create an array with twelve rainfall values

var sum = 0; // Initialize the sum variable to start from 0	

for (var i = 0; i < rainfall.length; i++) { // Loop through the array
    sum = sum + rainfall[i]; // Sum = sum + value at the i:th index in the array
}

outputText1 = "The annual rainfall in Helsink is " + sum.toFixed(1) + " mm."; // Assign the biggest result to a variable

document.getElementById("divOutput").innerHTML = outputText1; // Write the sum of the rainfall values on the HTML page


