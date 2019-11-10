// 09.array_warm_up_2.js JavasScript code
// Initially, this program can translate only three words (cat, dog, bird).
// Modify the program so that it can translate more words. 
// Please feel free to choose the words yourself.

function translateToFinnish() {
    var givenWord = document.getElementById("txtEnglishWord").value;
    givenWord = givenWord.toLowerCase();
    
    var outputText = "unknown word";
    var wordFound = false;
    
    for (var index = 0; wordFound === false && index < englishWords.length; index++) {
        
        if (englishWords[index] === givenWord) {
            outputText = finnishWords[index];
            wordFound = true;
        }
    } 
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// These arrays are created when the HTML page is loaded
var englishWords = ["cat", "dog", "bird", "wolf", "fox"];
var finnishWords = ["kissa", "koira", "lintu", "susi", "kettu"];

// End