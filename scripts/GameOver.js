GameOver = function(game)
{
	this.bg = null;
	this.btnIntentar = null;
	this.btnMenu = null;
	this.lost= null;
}

GameOver.prototype = 
{
	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');
		this.lost = this.add.sprite(0,0,'you-lose');
		this.lost.anchor.setTo(0.5,0.5);
		this.lost.scale.setTo(0.5);
		this.lost.x = Global.WIDTH/2;
		this.lost.y = 200;

		this.btnIntentar = this.add.button(0,0,'button-intentar',this.startGame,this,1,0,2);
		this.btnIntentar.x = Global.WIDTH/2 - this.btnIntentar.width/2;
		this.btnIntentar.y= Global.HEIGHT/2 - this.btnIntentar.height+80;

		this.btnMenu = this.add.button(0,0,'Menu',this.ReturnToMenu,this)
		this.btnMenu.x = Global.WIDTH/2 - this.btnMenu.width/2;
		this.btnMenu.y = Global.HEIGHT/2 - this.btnMenu.height+140;
	},

	startGame:function()
	{
		this.state.start('Game')
	},

	ReturnToMenu:function()
	{
		this.state.start('Menu');
	},
}