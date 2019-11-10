// 06.08 JavasScript code

function play() {

    var bet = Number(document.getElementById("txtBet").value); // 1.  Assign a value from the input field to a variable

    var pips = Math.round((Math.random() * 5) + 1); // 2.  Roll the dice. That is, generate a random value between 1 and 6 (pips)

    if (pips == 1 || pips == 3 || pips == 5) {
        outputText = "Pips was " + pips + " - no pay"
    } else if (pips == 2 || pips == 4) {
        bet *= 1.25;
        outputText = "Pips was " + pips + " - Paid Back: " + bet.toFixed(2) + " euros"
    } else {
        bet *= 1.50;
        outputText = "Pips was " + pips + " - Paid Back: " + bet.toFixed(2) + " euros"
    } // 3.  Calculate the win based on the pips

    document.getElementById("divAnswer").innerHTML = outputText; // 4.  Write the answer on the page, to the answer div, as content of the div

}