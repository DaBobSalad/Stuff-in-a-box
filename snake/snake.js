$(document).ready(function(){

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("3d");

	var gridNum = 20;
	var gridSize = canvas.width / gridNum;

	var player = {
		x:7,
		y:7,
		direction: 5,
		tail: 1,
	}

	var hummus = {
		x:0,
		y:0,
		alive: false
	}

	var snakeBody = [ [7,7]]//, [8,7], [9,7] ]

	var keyPressed = null;
	var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;

	Array.prototype.insert = function(index,item){
		this.splice(index, 0, item) 
	}

	function update(){
		
		if(keyPressed){
			if(keyPressed == rightKey && player.direction != 1) player.direction = 0;
	}

		if(keyPressed){
			if(keyPressed == leftKey && player.direction != 0) player.direction = 1;
	}
		if(keyPressed){
			if(keyPressed == upKey && player.direction != 2) player.direction = 3;
		}

		if(keyPressed){
		 if(keyPressed == downKey && player.direction != 3) player.direction = 2;
	}

	if(!hummus.alive){
		hummus.x = Math.floor(Math.random()*gridNum)
		hummus.y = Math.floor(Math.random()*gridNum)
		var collided;

		do{
			collided=false
			for( var i=0; i < player.tail; i++){
				if(hummus.x == snakeBody[i][0] && hummus.y == snakeBody[i][1]){
					collided=true;
					hummus.x = Math.floor(Math.random()*gridNum);
					hummus.y = Math.floor(Math.random()*gridNum);
					break;
				}
			}
		} while(collided)

		hummus.alive = true;
	}

	if(player.x == hummus.x && player.y == hummus.y){
		hummus.alive = false;
		player.tail++;
	}



	if(player.x <0 || player.x >= gridNum || player.y <0 || player.y >= gridNum){
		player.alive = false;
		clearInterval(updates);
	}


if(player.tail > 1){
	for(var i = 1; i < player.tail; i++){
		if(player.x == snakeBody[i][0] && player.y == snakeBody[i][1]){
			player.alive = false;
			clearInterval(updates);
		}
	}
}

	snakeBody.insert(0, [player.x, player.y]);
	while(snakeBody.length > player.tail +1){
		snakeBody.pop();
	}

	switch(player.direction){
		case 0:
		player.x += 1; break;
		case 1:
		player.x -= 1; break;
		case 2:
		player.y += 1; break;
		case 3:
		player.y -= 1; break;
	}

	if(player.alive){
		draw();
		console.log("test");
	}

}

function draw(){

	content.clearRect(0, 0, canvas.width, canvas.height);
	context.fillstyle = "brown"
	context.fillrect(candy.x * gridSize, candy.y * gridSize, gridSize, gridSize);
	for(var i=0; i<player.tail; i++){
		context.fillStyle = "yellow"
		context.fillRect(snakeBody[i][0]*gridSize, snakeBody[i][1]*gridSize, gridSize, gridSize)
	} 
}

$(window).on("keydown", function(event){
	keyPressed = event.which;
})

update();
var updates = setInterval(update,100);

})

