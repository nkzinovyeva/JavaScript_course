// 09.array_example_2.js JavasScript code

function insertValue() {
    var txtValue = document.getElementById("txtValue");
    var value = Number(txtValue.value);

    myArray.push(value);        // Adds a new element to the end of the array
    
    showArray();
    
    txtValue.value = "";
    txtValue.focus();           // Moves the cursor to the input field
}

function showArray() {

    var outputText = "myArray.length : " + myArray.length + "<br/><br />";
    
    for (var i = 0; i < myArray.length; i++) {
          outputText = outputText + "myArray[" + i + "] : " + myArray[i] + "<br />"; 
    }

    document.getElementById("divOutput").innerHTML = outputText;
}

// This empty array is created when the HTML page is loaded
var myArray = [];     // Creates an empty array

showArray();

// End