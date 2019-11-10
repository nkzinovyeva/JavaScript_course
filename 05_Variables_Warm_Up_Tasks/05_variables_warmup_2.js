// 05_variables_warmup_2 JavasScript code

function add() {

    var firstnum;
    var secondnum;
    var sum;
    var expr;

    firstnum = Number(document.getElementById("txtFirst").value);
    secondnum = Number(document.getElementById("txtSecond").value);

    sum = firstnum + secondnum
    expr = firstnum + " + " + secondnum + " = " + sum;
    document.getElementById("pOutput").innerHTML = expr;

}