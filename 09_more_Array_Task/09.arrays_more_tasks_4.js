function getNumbers() {
    var arrayLottery = [];
    for (var i = 0; i < 7; i++) {
        var intValue = lottery();
        if (arrayLottery.indexOf(intValue) == -1) {
            arrayLottery.push(intValue);
        } else {
            var intValue = lottery();
        }
    }

    arrayLottery.sort(function (a, b) {return a - b});
    document.getElementById("divOutput").innerHTML = arrayLottery;
}

function lottery(min, max) {
    var min = 1;
    var max = 40;
    var integer = Math.floor(Math.random() * (max - min)) + min;
    return integer;
}