// 05.09 JavasScript code 

function calculateRent() {

    var price = Number(document.getElementById("rent").value);
    var ppl = Number(document.getElementById("participants").value);
    var rent = price / ppl;

    document.getElementById("divAnswer").innerHTML = "Rent per participants is " + rent.toFixed(2);

}