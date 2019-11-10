// 05_variables_warmup_5 JavasScript code

function calculate() {

    var balance;
    var procent;
    var firstYear;
    var secondYear;
    var z;
    var y;

    balance = Number(document.getElementById("txtStartingBalance").value);
    procent = Number(document.getElementById("txtInterestRate").value);

    firstYear = balance + balance * procent / 100;
    secondYear = firstYear + (firstYear / 100 * procent);
    z = firstYear.toFixed(2);
    y = secondYear.toFixed(2);
    document.getElementById("pOutput").innerHTML = "1. year: " + z + " <br /> " + " 2. year: " + y;

}