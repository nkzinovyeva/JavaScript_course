// 10.object_more_tasks_2.js JavasScript code
// This program should show a list of departments, but it does not do it properly yet.
// Modify the program so that it displays department numbers and names properly.
// * Add a function named toString to the object constructor.
// * Do not do any other modifications to the code.

function Department(deptno, deptname) {
    this.number = deptno;
    this.name = deptname;
    this.toString = function () {
        return this.number + " " + this.name;
    }
}

var outputText = "";
var departmentArray = [];

departmentArray.push(new Department(10, "Sales"));
departmentArray.push(new Department(20, "Marketing"));
departmentArray.push(new Department(30, "Product development"));


for (var i = 0; i < departmentArray.length; i++) {
    outputText += departmentArray[i].toString() + "<br />";
}

document.getElementById("pOutput").innerHTML = outputText;