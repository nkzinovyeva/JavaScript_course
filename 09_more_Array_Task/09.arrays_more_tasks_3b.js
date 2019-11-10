var arrayName = [];
var arrayAge = [];

function insertValue() {
    var name = document.getElementById("nameValue").value;
    var age = document.getElementById("ageValue").value;
    arrayName.push(name);
    arrayAge.push(age);
    document.getElementById("nameValue").value = "";
    document.getElementById("ageValue").value = "";
    document.getElementById("divOutput").innerHTML = arrayName.length + " members";
}

function checkMinors() {
    outputText = "";
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayAge[i] < 18) {
            outputText = outputText + arrayName[i] + ", " + arrayAge[i] + " years" + "<br>";
        }
    }
    return document.getElementById("divOutput2").innerHTML = outputText;
}

function checkAdults() {
    outputText = "";
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayAge[i] >= 18) {
            outputText = outputText + arrayName[i] + ", " + arrayAge[i] + " years" + "<br>";
        }
    }
    return document.getElementById("divOutput2").innerHTML = outputText;
}

function checkOldest() {
    var maxAge = Math.max(...arrayAge);
    outputText = "";
    for (var i = 0; i < arrayAge.length; i++) {
        if (maxAge == arrayAge[i]) {
            outputText = outputText + arrayName[i] + ", " + arrayAge[i] + " years" + "<br>";
        }
    }
    return document.getElementById("divOutput2").innerHTML = outputText;
}

function checkYoungest() {
    var minAge = Math.min(...arrayAge);
    outputText = "";
    for (var i = 0; i < arrayAge.length; i++) {
        if (minAge == arrayAge[i]) {
            outputText = outputText + arrayName[i] + ", " + arrayAge[i] + " years" + "<br>";
        }
    }
    return document.getElementById("divOutput2").innerHTML = outputText;
}