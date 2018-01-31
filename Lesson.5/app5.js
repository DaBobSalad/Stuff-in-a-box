console.log("test");

var c = document.getElementById("Canvas5");
var ctx = c.getContext('2d');

var WIDTH = 1400;
var HEIGHT = 700;

var x, y;
var mx, my;

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.lineWidth=5;
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
}


function init(){
	x = 255;
	y = 155;
	mx = 5;
	my = 2;
	return setInterval(ani,20);
}

function ani(){
	clear();
	circle(x,y,75);
    ctx.strokeStyle = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255);
	ctx.stroke();

	if(x+mx < 0 || x+mx > WIDTH){
	mx = -mx;
}
  if(y+my < 0 || y+my > HEIGHT){
	my = -my;
}
	x = x + mx;
	y = y + my;
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

init();