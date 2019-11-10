// 05_variables_warmup_1 JavasScript code

function showEmail() {

    var givenName;
    var surName;
    var email;

    givenName = document.getElementById("txtGivenName").value;
    surName = document.getElementById("txtSurname").value;

    email = givenName + "." + surName + "@myy.haaga-helia.fi";
    document.getElementById("pOutput").innerHTML = email;

}