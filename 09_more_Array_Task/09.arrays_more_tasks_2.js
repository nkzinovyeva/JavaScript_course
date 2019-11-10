function insertValue() {

    var blood = document.getElementById("txtValue").value;

    var outputText = "Unknown Blood type";

    var counter = 0;

    for (var index = 0; index < bloodTypes.length; index++) {
        if (bloodTypes[index] === blood) {
            counter = counter + 1;
            var percent = (counter * 100) / bloodTypes.length;
            outputText = blood + " " + percent + " percent.";
        }
    }

    document.getElementById("divOutput").innerHTML = outputText;

}

var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];