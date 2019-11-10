// 06.02 JavasScript code

function checkAge() {

    var age = Number(document.getElementById("txtAge").value); // 1. Read age from the input field and assign it to a variable

    if (age < 18) {
        outputText = "Adolescents are not allowed to play.";
    } // 2. If the age is smaller than 18, then assign text "Adolescents are not allowed to play." to a variable,
    else {
        outputText = "Old enough to play.";
    } //    otherwise assign text "Old enough to play." to the variable  

    document.getElementById("divAnswer").innerHTML = outputText; // 3. Write the answer to the answer div, as the content

}