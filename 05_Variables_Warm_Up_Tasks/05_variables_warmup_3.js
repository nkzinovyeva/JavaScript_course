// 05_variables_warmup_3 JavasScript code

function showMinutes() {

    var hours;
    var minutes;
    var totalMin;
    var answer;

    hours = Number(document.getElementById("txtHours").value);
    minutes = Number(document.getElementById("txtMinutes").value);

    totalMin = hours * 60 + minutes;
    answer = totalMin + " minutes";
    document.getElementById("pOutput").innerHTML = answer;

}