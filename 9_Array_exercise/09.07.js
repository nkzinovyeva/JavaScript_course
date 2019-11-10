// 09.07 JavasScript code

var imageNames = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"]; // Create an array with file names of images

for (var i = 0; i < imageNames.length; i++) { // Loop through the array
    var img = document.write("<img src='" + imageNames[i] + "' alt='Funny shape'>");
}


// Use a for loop to show all the images. 

// Use the document.write() method to write one new image element to the web page per each image.