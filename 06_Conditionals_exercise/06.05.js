// 06.05 JavasScript code

function calculateBMI() {

    var weight = Number(document.getElementById("txtWeight").value);

    var height = Number(document.getElementById("txtHeight").value) / 100;

    var bmi = weight / (height * height);

    if (bmi <= 18.4) {
        outputText = "Body mass index (BMI) is " + bmi.toFixed(2) + " and your weight less than normal weight.";
    } else if (bmi >= 25.0) {
        outputText = "Body mass index (BMI) is " + bmi.toFixed(2) + " and this is an Overweight, sorry.";
    } else {
        outputText = "Body mass index (BMI) is " + bmi.toFixed(2) + " and this is a Normal weight.";
    }

    document.getElementById("divAnswer").innerHTML = outputText;

}