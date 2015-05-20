Preloader = function(game)
{
	this.loadingBar = null;
	Global = {WIDTH:800,HEIGHT:600};
}

Preloader.prototype = {
	preload:function()
	{
		this.loadingBar = this.add.sprite(0,0,'loading');
		this.loadingBar.anchor.setTo(0.5,0.5);
		this.loadingBar.x = Global.WIDTH/2;
		this.loadingBar.y = Global.HEIGHT/2;
		this.load.setPreloadSprite(this.loadingBar);
		this.load.image('background','img/Fondo.jpg');
		this.load.image('Titulo','img/Logo.png');
		this.load.image('trofeo','img/trophy.png');
		this.load.image('vida','img/Vida.png');
		this.load.image('button-original','img/button-original.png');
		this.load.image('button-practica','img/button-practica.png');
		this.load.image('button-score','img/button-score.png');
		this.load.image('you-lose','img/You-Lose.png')


		//botones
		this.load.spritesheet('button-jugar','img/button-jugar.png',105,51);
		this.load.spritesheet('button-instrucciones','img/button-instrucciones.png',180,51);
		this.load.spritesheet('button-intentar','img/button-intentar.png',205,51);
		this.load.spritesheet('carta','img/cards-sheet.png',81,117);
		this.load.image('Regresar','img/button-Return.png');
		this.load.image('Menu','img/button-Menu.png');

	},

	create:function()
	{
		this.state.start('Menu');
	}
}
