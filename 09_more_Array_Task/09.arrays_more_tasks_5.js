var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
var arrayValue = [];
var counter = [];


function distribution() {

    var previous;

    bloodTypes.sort();
    for (var i = 0; i < bloodTypes.length; i++) {
        if (bloodTypes[i] !== previous) {
            arrayValue.push(bloodTypes[i]);
            counter.push(1);
        } else {
            counter[counter.length - 1]++;
        }
        previous = bloodTypes[i];
    }

    outputText = "";

    for (var index = 0; index < counter.length; index++) {
        var percent = (counter[index] * 100) / bloodTypes.length;
        outputText = outputText + percent.toFixed(1) + "%: " + arrayValue[index] + "<br/>";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}