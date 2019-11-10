// DebuggingExercise.js
// 

function classifyAge() {
    var outputText;
    
    var ageText = document.getElementById("txtAge").value;
    var age = Number(ageText);
        
    if (ageText.trim() === "" || isNaN(age)) {
        outputText = "Please enter an integer between 0 and 122.";
    } else if (age < 0 || age > 122) {
        outputText = "Please enter an integer between 0 and 122.";
    } else if (age < 18) {
        outputText = "You're a minor.";
    } else {
        outputText = "You're an adult.";
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
    
}