// 07.06 JavasScript code

function kela(p_length) { // Define a function (1.) 
    var v_comp = 0;
    if (p_length <= 10) {
        v_comp = 8.00;
    } else if (p_length <= 20) {
        v_comp = 11.00;
    } else if (p_length <= 30) {
        v_comp = 13.50;
    } else if (p_length <= 45) {
        v_comp = 16.50;
    } else if (p_length <= 60) {
        v_comp = 21.00;
    }
    return v_comp;
}

function pay(p_fee, p_kela) { // Define a function (2.) 
    var v_pay = p_fee - p_kela + 15.90;
    return v_pay;
}

// Complete the code of the function calculate.
function calculate() {

    var v_length = parseInt(document.getElementById("txtLength").value); // 1. Get values from the input fields
    var v_fee = parseFloat(document.getElementById("txtDoctorsFee").value);

    outputText1 = "Doctors Fee is " + v_fee.toFixed(2) + " euros. <br>";
    outputText2 = "Kela reimbursement is " + kela(v_length).toFixed(2) + " euros.<br>"; // 2. Call the function (1.) which calculates Kela reimbursement 
    outputText3 = "Office Fee is 15.90 euros.<br>"
    outputText4 = "Customer needs to pay " + pay(v_fee, kela(v_length)).toFixed(2) + " euros." // 3. Call the function (2.) which calculates amount left for the customer to pay

    document.getElementById("divOutput").innerHTML = outputText1 + outputText2 + outputText3 + outputText4; // 4. Display the answer 

}