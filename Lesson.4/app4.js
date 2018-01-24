console.log("test");

var c = document.getElementById("Canvas1");
var ctx = c.getContext('2d');

var m = document.getElementById("Canvas2");
var mtx = m.getContext('2d');

var img = new Image();
img.src = 'Squirrel.png'

img.onload = function(){
	ctx.drawImage(img,0,0,300,300);
}

mtx.font = "40px comicsansms"
mtx.fillStyle="grey"
mtx.fillText('<-- Squirrel',50,150);