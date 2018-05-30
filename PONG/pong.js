$(document).ready(function(){
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");

var gameOver = true;

const HEIGHT = canvas.height;
const WIDTH = canvas.width;
const PI = Math.PI;
const upKey = 39, downKey = 37;

var keyPressed = null;

var player = {
	width: 20,
	height: 100,
	x: null,
	y: null,
	update: function(){
				if (keyPressed == upKey) this.y -= 10;
		if (keyPressed == downKey) this.y += 10;
	},
		draw: function(){ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var ai = {
	width: 20,
	height: 100,
	x: null,
	y: null,
	update: function(){
	let target = ball.y - (this.height - ball.size);
	this.y += (target - this.y) *0.1;
	},
	draw: function(){
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var ball = {
	size:20,
	x: null,
	y: null,
	speedx: null,
	speedy: null,
	speed: 10,
	update: function(){
		this.x += this.speedx;
		this.y += this.speedy;

		if(this.y + this.size >= HEIGHT || this.y <= 0){
			this.speedy *= -1;
		}

		function checkCollision(a,b){
			return (a.x < b.x + b.width 
			&& a.y < b.y + b.height 
			&& b.x < a.x + a.size
			&& b.y < a.y + a.size);
		}

		let other;
		if (ball.speedx < 0){
			other = player;
		} else {
			other = ai;
		}

		let collided = checkCollision(ball, other);

		if (collided){
			let n = (this.y + this.size - other.y) / (other.height + this.size);
			let phi = 0.25 * PI * (2 * n - 1);
			this.speedx = this.speed * Math.cos(phi);
			this.speedy = this.speed * Math.sin(phi);
			if (other == ai) this.speedx *= -1;
		}

		if (this.x + this.size < 0 || this.x > WIDTH){
			gameOver = true;
			$("button").fadeIn();
			if (this.x + this.size < 0){
				$("h1").html("You Lose!")}
				else {
					$("h1").html("You Win!")}
				}
			}

	,
	draw: function(){ctx.fillRect(this.x, this.y, this.size, this.size);
	}

}

function main(){
	init();

	var loop = function(){
		update();
		draw();
		window.requestAnimationFrame(loop, canvas);
	}
	window.requestAnimationFrame(loop, canvas);

}

function init(){
	gameOver = false;
	$("h1").html("Pong");

	player.x = 20;
	player.y = (HEIGHT - player.height)/2;

	ai.x = (WIDTH - ai.width - 20);
	ai.y = (HEIGHT - ai.height)/2;

	ball.x = (WIDTH - ball.size)/2;
	ball.y = (HEIGHT - ball.size)/2;

	ball.speedx = ball.speed;

	if(Math.round(Math.random()))
		ball.speedx*= -1;
	ball.speedy=0
}

function update(){
	if(!gameOver)
		ball.update();
	ai.update();
	player.update();
}

function draw(){
	ctx.fillStyle = "darkslateblue";
	ctx.fillRect(0,0, WIDTH, HEIGHT);
	ctx.save();

	ctx.fillStyle = "aqua";
	ball.draw();
	ai.draw();
	player.draw();

	ctx.restore();
}

$(document).on("keyup", function(){
	keyPressed = null;
});

$(document).on("keydown", function(e){
	keyPressed = e.which;
});

$("button").on("click", function(){
	$(this).hide();
	init(); })


main();

})