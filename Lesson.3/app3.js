console.log("test");

var c = document.getElementById("Canvas1");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="red";
ctx.moveTo(150,20);
ctx.lineTo(50,270);
ctx.lineTo(250,270);
ctx.closePath();
ctx.stroke();
ctx.fillStyle ="purple";
ctx.fill();

ctx.beginPath();
ctx.arc(150,190,60,0,3.14);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(130,140,10,0,6.28);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(180,140,10,0,6.28);
ctx.closePath();
ctx.stroke();

var m = document.getElementById("Canvas2");
var mtx = m.getContext('2d');

mtx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="black";
mtx.arc(150,150,100,0,6.28);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="yellow";
mtx.fill();

mtx.beginPath();
mtx.arc(100,140,30,0,6.28);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="white";
mtx.fill();

mtx.beginPath();
mtx.arc(100,140,20,0,6.28);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="black";
mtx.fill();

mtx.beginPath();
mtx.arc(200,140,30,0,6.28);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="white";
mtx.fill();

mtx.beginPath();
mtx.arc(200,140,20,0,6.28);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="black";
mtx.fill();

mtx.beginPath();
mtx.arc(150,180,60,0,3.14);
mtx.closePath();
mtx.stroke();
mtx.fillStyle ="red";
mtx.fill();

