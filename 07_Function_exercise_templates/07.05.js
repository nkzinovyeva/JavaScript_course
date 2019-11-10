// 07.05 JavasScript code

// 1. Complete the code of the function showSalary
function calculateSalary(hours, hourlySalary) {

    var salary = hours * hourlySalary // 1.1 Calculate gross salary
    return salary; // 1.2 Return the gross salary with the return statement

}


// 2. Complete the code of the function showSalary
function showSalary() {

    var hours = Number(document.getElementById("txtHours").value); // 2.1 Get values from the input fields
    var hourlySalary = Number(document.getElementById("txtHourlySalary").value);

    var outputText = "Gross salary is " + calculateSalary(hours, hourlySalary).toFixed(2) + " euros." // 2.2 Call the calculateSalary function to determine the gross salary

    document.getElementById("divOutput").innerHTML = outputText; // 2.3 Show the answer on the web page

}