// 10.06 JavasScript code

// Data (a single string) in the JSON (JavaScript Object Notation) format.
var jsonText = '[' +
    '{ "number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready" },' +
    '{ "number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless" },' +
    '{ "number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions" }' +
    ']';

function listProducts() {
    var productArray = JSON.parse(jsonText);
    var outputText = "";
    for (var i = 0; i < productArray.length; i++) {
        var outputText = outputText + "Number: " + productArray[i].number +
            "<br/>Name: " + productArray[i].name +
            "<br/>Price: " + productArray[i].price.toFixed(2) +
            "<br/>Description: " + productArray[i].description + "<br/><br/>";
    };
    document.getElementById("divOutput").innerHTML = outputText;
}

listProducts();