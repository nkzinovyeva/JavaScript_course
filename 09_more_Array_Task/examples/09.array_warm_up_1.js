// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function showFinnishWord() {
    var wordArray = ["January", "February", "March", "April", "May", "June", 
                     "July", "August", "September", "October", "November", "December"];
    
    var digitText = document.getElementById("txtDigit").value;
    var digit = Number(digitText);
    
    if (digit >= 1 && digit <= 12) {
        outputText = wordArray[digit - 1];
    } else {
        outputText = "Please enter a valid digit (1-12)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}

// End