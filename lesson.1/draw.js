console.log("testing");

var c = document.getElementById("canva");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.strokeStyle="pink";
ctx.lineWidth=10;
ctx.stroke();

ctx.strokeStyle="red";
ctx.strokeRect(300,300,100,100);
ctx.fillStyle="white";
ctx.fillRect(150,150,100,100);
ctx.clearRect(200,200,200,200);

var c1 = document.getElementById("canva1");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle="magenta";
ctx1.fillRect(0,0,300,300);
ctx1.clearRect(25,25,100,100);
ctx1.clearRect(175,25,100,100);
ctx1.clearRect(25,175,100,100);
ctx1.clearRect(175,175,100,100);