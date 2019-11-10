// 08.06 JavasScript code

function showComparisonScores() {

    var votes = Number(document.getElementById("txtVotes").value); // total votes
    var candidate = Number(document.getElementById("txtCandidates").value); // number of candidates
    outputText = "";

    for (var i = 1; i <= candidate; i++) {
        var score = votes / i;
        outputText += i + " candidate: " + score.toFixed(0) + "<br>"
    }
    document.getElementById("pOutput").innerHTML = outputText;

}