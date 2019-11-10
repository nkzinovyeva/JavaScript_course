// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    var str = document.getElementById("txtNname").value; // 1. Read value of name from the input field

    document.getElementById("divUpperCase").innerHTML = "<br>With upper case letters: " + str.toUpperCase(); // 2. Show it with "ALL CAPS" using toUpperCase()
    document.getElementById("divLowerCase").innerHTML = "With lower case letters: " + str.toLowerCase(); // 3. Show it with  "all small letters" using toLowerCase()
    document.getElementById("divLength").innerHTML = "Character count: " + str.length; // 4. Tell how many characters are there (length, includes also all spaces) 

    var contain = str.indexOf("muumi");
    if (contain === -1) {
        document.getElementById("divContains").innerHTML = "Doesn't contain the text muumi";
    } else
        document.getElementById("divContains").innerHTML = "Contains the text muumi"; // 5. Tell, whether the input string contains the word 'muumi'

    document.getElementById("divFirstCharacter").innerHTML = "First character: " + str.charAt();// 6. Tell the first character using charAt()

    document.getElementById("divManyCharacters").innerHTML = "First three characters: " + str.substr(0, 3);// 7. Tell which ones are the first three characters using substr(). */

}