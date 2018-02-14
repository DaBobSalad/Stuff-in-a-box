var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preloa, crete:create, update:update});
var score = 0;
var lives = 1.5;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platforms.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude', 32, 48);
	game.load.spritesheet('dog', 'assets/baddie', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	plastforms = game.add.physicsGroups();
	platforms.group.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable =  true;

	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create();
	ledge.body.immovable = true;
	ledge = platforms.create();

	var style = {font: "bold 32px Bookman", fill: "aqua"};

	scorelabel = game.add.text(300, 560, "Score-", style);
	scoretext = game.add.text(420, 560, score, style);

	livelabel = game.add.text(10, 50, "Lives-", style);
	livetext = game.add.text(120, 5, lives, style);
}

function update(){

}