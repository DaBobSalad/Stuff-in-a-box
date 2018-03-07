var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score = 0;
var lives = 1.5;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('dog', 'assets/baddie.png', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable =  true;

	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 200, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create();

	var style = {font: "bold 32px Bookman", fill: "aqua"};

	scorelabel = game.add.text(300, 560, "Score-", style);
	scoretext = game.add.text(420, 560, score, style);

	livelabel = game.add.text(10, 50, "Lives-", style);
	livetext = game.add.text(120, 50, lives, style);

	//lesson 8

	player = game.add.sprite(32, 5, 'dude')
		player.animations.add('left', [0,1,2,3],10,true);
		player.animations.add('right', [5,6,7,8],10, true)	
		game.physics.arcade.enable(player);
		player.body.gravity.y = 100;
		player.body.bounce.y = 0.5;
		player.body.collideWorldBounds = true;

		enemy1 = game.add.sprite(760, 20, 'dog')
		enemy1.animations.add('left', [0,1],10,true);
		enemy1.animations.add('right', [3,4],10, true)	
		game.physics.arcade.enable(enemy1);
		enemy1.body.gravity.y = 1000;
		enemy1.body.bounce.y = 0.3;
		enemy1.body.collideWorldBounds = true;

		stars = game.add.physicsGroup();
		stars.enableBody = true;

		for(var i=0; i < 14; i++){
			var star = stars.create(i * 70, 0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random()* 0.3;
		}

		cursors = game.input.keyboard.createCursorKeys();
}



function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms); 
	game.physics.arcade.collide(enemy1, platforms);

	player.body.velocity.x = 0;

	if(cursors.left.isDown){
		player.animations.play('left');
		player.body.velocity.x = -150;
	} else if(cursors.right.isDown){
		player.animations.play('right');
		player.body.velocity.x = 150;
	} else{
		player.animations.stop();
		player.frame = 4;
	}

	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}
	
	game.physics.arcade.overlap(player, stars, collectStar);
	game.physics.arcade.overlap(player, enemy1, loseLife);

	moveEnemy();

	if(lives=0.0){
		endgame();
	}

}

	function endGame(){
		player.kill();
		scorelabel.text = "Game Over You scored " + score;
		scoretext.visible = false;
		lifetext.visible = false;
		lifelabel.visible = false;
	}

	function moveEnemy(){
		if(enemy1.x > 760){
			enemy1.animations.play('left');
			enemy1.body.velocity.x = -150;
		} else if(enemy1.x < 405){
			enemy1.animations.play('right');
			enemy1.body.velocity.x = 120;
		}
	}

	function loselife(player, enemy){
		lives -= 0.5;
		lifetext.setText(lives);

		enemy.kill();
		enemy.reset(10, 20);
	}

	function collectStar(player, stars){
		score += 10;
		scoretext.setText(score);
		star.kill();
		star.reset(math.random()* 760, 0);
	}