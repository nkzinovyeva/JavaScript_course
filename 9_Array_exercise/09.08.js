// 09.08 JavasScript code


var names = []; // Define the array variable inside the script element, but NOT inside the function. 
// Then they will be global and thus available for all functions to read from or write to.

function addName() {
    var participant = document.getElementById("txtName").value;

    names.push(" " + participant); // Assign name from the input field to the array

    // Go through the array in a for loop adding each name at the end of the namesText

    document.getElementById("divNameList").innerHTML = "Inserted names: " + names;
    // Write the names on the page, to the names div, as content of the div

    document.getElementById("txtName").value = ""; // Empty the input field of name as that name was just put in the array

    // Empty the answer text

}

function makeDraw() {

    var winningIndex = Math.floor(Math.random() * names.length);// Randomize the index of the winner


    document.getElementById("divOutput").innerHTML = "Winner is " + names[winningIndex];// Write the answer on the page


}