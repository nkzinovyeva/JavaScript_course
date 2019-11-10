// 05.10 JavasScript code

function calculateCosts() {

    var dist = Number(document.getElementById("kilometers").value) / 100;
    var consump = Number(document.getElementById("consumption").value);
    var price = Number(document.getElementById("price").value);
    var ppl = Number(document.getElementById("participants").value);

    var rent = (dist * consump * price) / ppl;

    document.getElementById("divAnswer").innerHTML = "Fuel costs per participant is " + rent.toFixed(2) + " euros."

}