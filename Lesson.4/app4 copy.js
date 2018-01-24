console.log("test");

var c = document.getElementById("Canvas1");
var ctx = c.getContext('2d');

var img = new Image();
img.src = 'Run.png'

img.onload = function(){
	ctx.drawImage(img,100,100,300,300);
}
	
ctx.fillStyle="green";
ctx.fillRect(0,300,900,600);

ctx.beginPath();
ctx.arc(50,50,100,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle ="yellow";
ctx.fill();