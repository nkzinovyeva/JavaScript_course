// 06.09 JavasScript code

function tellInfractionFine() {

    var speed = Number(document.getElementById("txtDrivingSpeed").value);
    var limit = Number(document.getElementById("txtSpeedLimit").value);
    var exceed = speed - limit;
    
    if (exceed <= 15 && exceed > 0) {
        if (limit >= 10 && limit <= 60) {
            outputText = "Infraction fine is 85 euro"
        }
        else if (limit >= 70 && limit <= 120) {
            outputText = "Infraction fine is 70 euro"
        }
    }
    else if (exceed > 15 && exceed <= 20 ) {
        if (limit >= 10 && limit <= 60) {
            outputText = "Infraction fine is 115 euro"
        }
        else if (limit >= 70 && limit <= 120) {
            outputText = "Infraction fine is 100 euro"
        }
    }
    else if (exceed > 20) {
        outputText = "Income-based unit fine."
    }
    else {
        outputText = "No speeding, no fine."
    }
    document.getElementById("divAnswer").innerHTML = outputText;
}