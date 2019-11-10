// 06.07 JavasScript code

function showStudyGrant() {

    var age = Number(document.getElementById("txtAge").value);

    var parents = document.getElementById("txtWithParents").value;

    if (parents === "y" && age >= 20) {
        outputText = "The study grant is 136.70 euros."
    }
    else if (parents === "n" && age >= 20) {
        outputText = "The study grant is 335.20 euros."
    } else {
        outputText = "Ask Kela"
    }
    document.getElementById("divAnswer").innerHTML = outputText;
}