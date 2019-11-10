// 08.08 JavasScript code

function calculateProfit() {
    var rounds = Number(document.getElementById("txtRounds").value); // Read value of rounds from the input field
    var win = 0;

    for (var i = 0; i < rounds; i++) //loop for rounds
    {
        var pips = Math.round((Math.random() * 5) + 1); // dice 
        if (pips == 1 || pips == 3 || pips == 5) {
            win += 0; // 1 bet is always 1 euro
        } else if (pips == 2 || pips == 4) {
            win += 1.25;
        } else {
            win += 1.50;
        }
    }
    var profit = rounds - win; // calculate profit of game's owner

    outputText = "Bets were altogether " + rounds.toFixed(2) + " euros. <br>Wins were " + win.toFixed(2) + " euros.<br>Profit was " + profit.toFixed(2) + " euros."
    document.getElementById("pOutput").innerHTML = outputText;
}