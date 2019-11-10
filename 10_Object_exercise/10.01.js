// 10.01 JavasScript code

var student = {
    firstName: "Pekka",
    lastName: "Virtanen",
    stNumber: "a1234567",
    strAddress: "Virtakatu 11",
    postcode: "12345",
    city: "Virtala",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullAdress: function () {
        return this.strAddress + ", " + this.postcode + ", " + this.city;
    }
}; //  Create a JavaScript object that includes facts about one student

student.Birth = "24.12.1990";

showStudentInfo();

function showStudentInfo() {
    var outputText = "Student Number: " + student.stNumber +
        "<br/>Student Name: " + student.fullName() +
        "<br/>Student Adress: " + student.fullAdress() +
        "<br/>Date of Birth: " + student.Birth;


    document.getElementById("divOutput").innerHTML = outputText;
}