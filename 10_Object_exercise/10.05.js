// 10.05 JavasScript code

// Create an array of Course objects
var courses = [{
        "name": "Orientation to software engineering",
        "code": "SWD1TF001",
        "extent": "5",
        "timing": "1.semester"
    },
    {
        "name": "Programming",
        "code": "SWD1TF002",
        "extent": "5",
        "timing": "2.semester"
    },
    {
        "name": "Data management and databases",
        "code": "SWD1TF003",
        "extent": "5",
        "timing": "2.semester"
    },
    {
        "name": "Mobile development project",
        "code": "SWD1TF004",
        "extent": "10",
        "timing": "3.semester"
    }
];


function listCourses() {
    var outputText = "";
    for (var i = 0; i < courses.length; i++) {
        var coursestr = JSON.stringify(courses[i]);
        var courseObject = JSON.parse(coursestr);
        var outputText = outputText + "Code: " + courseObject.code +
            "<br/>Name: " + courseObject.name +
            "<br/>Extent: " + courseObject.extent +
            "<br/>Timing: " + courseObject.timing + "<br/><br/>";
    };
    document.getElementById("divOutput").innerHTML = outputText;
};

listCourses();