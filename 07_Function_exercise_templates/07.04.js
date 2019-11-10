// 07.04 JavasScript code

function randomInteger(from, to) {

    var random = Math.floor((Math.random() * (to - from + 1)) + from); // Generate a random number between 'from' and 'to' and return it.
    return random;
}

function rollTheDice() {

    var diceValue = randomInteger(1, 6); // (1) Call the function randomInteger(from, to) with parameter values 1 and 6.
    //     - Assign the return value of the function to the variable diceValue.

    document.getElementById("divOutput").innerHTML = diceValue; // (2) Dispaly the value of the variable diceValue.

}