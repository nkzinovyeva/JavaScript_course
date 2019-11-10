// 06.01 JavasScript code

function calculateFee() {

    var price = Number(document.getElementById("txtPrice").value); // 1. Read a value from the input field and save it to a variable

    var fee = price * 0.0344; // 2. Calculate the fee and save it to a variable

    if (fee < 2400) {
        fee = 2400
    } // 3. If the fee is under the minimum fee to be charged, then set the fee to be the minimum fee

    outputText = "Real state agent's fee is " + fee.toFixed(2) + " euros";

    document.getElementById("divAnswer").innerHTML = outputText; // 4. Write the answer to the answer div, as content of the div

}