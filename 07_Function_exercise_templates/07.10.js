// 07.10 JavasScript code


function calculate() { // Complete the code of the function calculate.

    var start = document.getElementById("txtStartTime").value;
    var finish = document.getElementById("txtEndTime").value; // Calculate length of the work as minutes.

    var beginH = start.substr(0, 2);
    var beginM = start.substr(3, 2);
    var endH = finish.substr(0, 2);
    var endM = finish.substr(3, 2);;
    var work = ((endH- beginH) * 60) + (endM - beginM);

    outputText1 = "Length of the work was " + work + " minutes. <br>";
    var dateText = document.getElementById("txtDate").value;

    if (isSunday(dateText)) { // If it is not Sunday, then Call isSunday() function from 07.10_functions.js file
        var price = (work / 60 * 72); //  Calculate and show price of the repair work on Sundays  
        outputText2 = "The hourly price during the Sundays is 72.00 euro.<br>";
        outputText3 = "The price of this repair work is " + price.toFixed(2) + " euro.";
    } else {
        var price = (work / 60 * 48).toFixed(2); //Calculate and show price of the repair work during the workdays,
        outputText2 = "The hourly price during the workdays is 48.00 euro.<br>";
        outputText3 = "The price of this repair work is " + price + " euro.";
    }

document.getElementById("divOutput").innerHTML = outputText1 + outputText2 + outputText3;
}

// Complete the code of the function modifyTitle.
function modifyTitle() {

    var txtTitle = document.getElementById("txtTitle"); // Read value of title from the input field
    allCapsTitleTrimmed(txtTitle); // Call allCapsTitleTrimmed() function from 07.10_functions.js file

}

