// 08.04 JavasScript code

var pips1 = Math.round((Math.random() * 5) + 1);;
var pips2 = Math.round((Math.random() * 5) + 1); // Randomize the pips1 and pips2 once
var i = 1; // Set the count to be one (now you have randomized once)

while (pips1 != pips2) { // Repeat as long as (pips are not equal) 
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1); // Randomize again
    i++; // Increment counter by one
}
outputText = "Same dice pips: " + pips1 + " and " + pips2 + "<br>There were " + i + " randomization rounds until we got the same pips." // Write the answer (including the count) to the html page with the document.write() method
document.getElementById("divAnswer").innerHTML = outputText;