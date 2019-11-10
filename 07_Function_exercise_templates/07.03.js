// 07.03 JavasScript code

function addImage(imgUrl) {
    var image = document.createElement("img");
    image.src = imgUrl;
    document.body.appendChild(image);
}

addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png");
addImage("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png");
addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png"); // WRITE YOUR OWN CODE BELOW