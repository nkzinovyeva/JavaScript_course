// 05_variables_warmup_4 JavasScript code

function showHoursAndMinutes() {

    var input;
    var minutes;
    var hours;

    input = Number(document.getElementById("txtMinutes").value);

    minutes = input % 60;
    hours = (input - minutes) / 60;
    document.getElementById("pOutput").innerHTML = hours + " h " + minutes + " min ";

}