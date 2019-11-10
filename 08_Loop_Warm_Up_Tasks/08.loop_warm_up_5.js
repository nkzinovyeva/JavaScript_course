// 08.loop_warm_up_5.js JavasScript code

// Task 1 (easy): Modify the JavaScript code so that it shows a multiplication table 1-9 by 1-9. 
// Task 2 (challenging): 
//         Modify the JavaScript code again so that it shows a multiplication table 5-10 by 5-10. 


document.write("<table>");

document.write("<tr>");
document.write("<td>*</td>");
for (var i = 1; i <= 9; i++) {
        document.write("<td>" + i + "</td>");
}
document.write("</tr>");

for (var y = 1; y <= 9; y++) {
        document.write("<tr>");
        document.write("<td>" + y + "</td>");

        for (var x = 1; x <= 9; x++) {
                document.write("<td>" + (y * x) + "</td>");
        }

        document.write("</tr>");
}

document.write("</table>");

document.write("<br><table>");

document.write("<tr>");
document.write("<td>*</td>");
for (var i = 5; i <= 10; i++) {
        document.write("<td>" + i + "</td>");
}
document.write("</tr>");

for (var y = 5; y <= 10; y++) {
        document.write("<tr>");
        document.write("<td>" + y + "</td>");

        for (var x = 5; x <= 10; x++) {
                document.write("<td>" + (y * x) + "</td>");
        }

        document.write("</tr>");
}

document.write("</table>");

// End