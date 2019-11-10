var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
var arrayValue = [];
var counter = [];


function distribution() {

    var position;
    bloodTypes.sort();

    for (var i = 0; i < bloodTypes.length; i++) {
        position = arrayValue.indexOf(bloodTypes[i]);
        if (position >= 0) {
            counter[position]++;
        } else {
            arrayValue.push(bloodTypes[i]);
            counter.push(1);
        }
    }

    outputText = "";

    for (var index = 0; index < counter.length; index++) {
        var percent = (counter[index] * 100) / bloodTypes.length;
        outputText = outputText + percent.toFixed(1) + "%: " + arrayValue[index] + "<br/>";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}
