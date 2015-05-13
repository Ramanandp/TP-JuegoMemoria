Preloader = function(game){
	this.loadingBar = null;
	Global = {WIDTH:800,HEIGHT:600};
}

Preloader.prototype = {
	preload:function(){
		this.loadingBar = this.add.sprite(0,0,'loading');
		this.loadingBar.anchor.setTo(0.5,0.5);
		this.loadingBar.x = Global.WIDTH/2;
		this.loadingBar.y = Global.HEIGHT/2;
		this.load.setPreloadSprite(this.loadingBar);
		this.load.image('background','img/background.png');
		this.load.image('button-pause','img/button-pause.png');
		//botones
		this.load.spritesheet('button-jugar','img/button-jugar.png',105,51);
		this.load.spritesheet('button-instrucciones','img/button-instrucciones.png',180,51);
		this.load.spritesheet('button-intentar','img/button-intentar.png',205,51);
		//82 98
		this.load.spritesheet('carta','img/cards-sheet.png',81,117);
		this.load.spritesheet('trofeo','img/trophy.png',256,256);
		//this.load.spritesheet('candy','img/candy2.png',82,98);
		this.load.spritesheet('candy','img/cards-sheet.png',81,117);
		this.load.image('gameover','img/gameover.png');
		this.load.image('monster-cover','img/monster-cover.png');
		//103,131
		//this.load.spritesheet('monster-idle','img/monster-idle.png',103,131);
		this.load.spritesheet('monster-idle','img/cards-sheet.png',81,118);
		this.load.spritesheet('monster-eats','img/monster-eats.png',103,131);
		this.load.image('title','img/title.png');
		this.load.image('score-bg','img/score-bg.png');
		this.load.image('floor','img/floor.png');
	},
	create:function(){
		this.state.start('Menu');
	}
}
