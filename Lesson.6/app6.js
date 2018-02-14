console.log("test");

var c = document.getElementById("Canvas1");
var ctx = c.getContext('2d');

var WIDTH=600;
var HEIGHT=600;

var x =300;
var y =300;
var w=50;
var h=50;

var mx=10;
var my=10;

var ax;
var ay;
var aw=50;
var ah=50;

var aCollision=false;

var score=0;

function drawPlayer(){
	var player= new Image
	player.src="squirrels.png";
	ctx.drawImage(player,x,y,w,h);
}

function drawThingy(){
	var thingy= new Image
	thingy.src="a.png";
	ctx.drawImage(thingy,ax,ay,aw,ah);
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function init(){
	window.onkeydown=keydowncontrol;

	ax= Math.floor(Math.random()*(WIDTH - aw))
	ay= Math.floor(Math.random()*(HEIGHT - ax))

	return setInterval(draw,10);
}

function draw(){
	clear();
	drawPlayer();
	drawThingy();

	if(x + mx > WIDTH - w || x +mx < 0){
		mx = -mx
	}else if(y+my < 0 || y+my > HEIGHT){
	my = -my;
	}
	x+=mx;
	y+=my;

	collisionCheck();
	collisionHandle();
}

	function keydowncontrol(e){
//17(ctrl)=left 18(alt)=down 91(command)=right 90(z)=up
		if (e.keyCode== 17){
			mx = -4;
			my = 0; 
		}
		else if (e.keyCode== 90){
			mx = 0;
			my = -4; 
		}
		else if (e.keyCode== 18){
			mx = 0;
			my = 4; 
		}
		else if (e.keyCode== 91){
			mx = 4;
			my = 0; 
		}
	}

	function collisionCheck(){
		if((x+w >= ax) && (x <= ax +aw) && (y+h >= ay) && (y <= ay + ah)){
			circleCollision=true;
		}
		else{
			circleCollision=false;
		}
	}

	function collisionHandle(){
		if(circleCollision){
				ax= Math.floor(Math.random()*(WIDTH - aw))
	            ay= Math.floor(Math.random()*(HEIGHT - ax))
	            score +=1;
	            document.getElementById("Nuts").innerHTML = "Nuttiness: " + score;
		}
	}

init();