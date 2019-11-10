// 07.09 JavasScript code

// Complete the code of the function tellAge.
function tellAge() {

    var birthYear = parseInt(document.getElementById("txtBirthYear").value); // 1. Read birth year from the input field 

    var today = new Date(); // 2. Figure out the current date into today variable 
    var currentYear = today.getFullYear(); // 3. Use the getFullYear() method to get the current year out from the today variable

    var age = currentYear - birthYear; // 4. Calculate (rough estimate of) the age
    if (age <= 0)
        document.getElementById("divOutput").innerHTML = "<br>ERROR! Put the right Year of Birth";
    else
        document.getElementById("divOutput").innerHTML = "<br>You are now " + age + " years old.<br>(Current year is " + currentYear + ".)";

    // 5. If age is less than zero, then show an error message, otherwise show the age.
}