// 09.04 JavasScript code

var minigolf = [23, 19, 37, 20, 21, 30, 26, 24]; // Create an array with minigolf results of eight players 
// (23, 19, 37, 20, 21, 30, 26, 24)

minigolf.sort();

outputText1 = "The smallest result is " + minigolf[0] + " (winner).<br>"; // Assign the smallest result to a variable

outputText2 = "The biggest result is " + minigolf[7]; // Assign the biggest result to a variable

document.getElementById("pOutput").innerHTML = outputText1 + outputText2; // Write the answer on the page














