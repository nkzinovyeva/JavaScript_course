// 06.03 JavasScript code

function comparePackages() {

    var message = Number(document.getElementById("txtMessages").value);
    var call = Number(document.getElementById("txtCallTime").value); // 1. Assign input field values to variables

    var costSpecial = 19.90 + (message * 0.069) + (call * 0.069); // 2. Calculate the cost of the Special Package

    if (costSpecial < 29.90) {
        outputText = "The Special package (" + costSpecial.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
    } // 3. If the special package is cheaper than the all-inclusive package
    else {
        outputText = "The All-inclusive package (29.90) is cheaper than the Special package (" + costSpecial.toFixed(2) + ")";
    }

    document.getElementById("divAnswer").innerHTML = outputText; // 4. Write the answer to the answer div, as the content

}