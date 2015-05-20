Win = function(game)
{
	this.bg = null;
	this.btnIntentar = null;
	this.trophy = null;
	this.btnMenu = null;
}

Win.prototype = 
{
	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');

		this.trophy = this.add.sprite(0,0,'trofeo');
		this.trophy.x = Global.WIDTH/2 - this.trophy.width/2;
		this.trophy.y = Global.HEIGHT/2 - this.trophy.height/2;

		this.btnIntentar = this.add.button(0,0,'button-intentar',this.startGame,this,1,0,2);
		this.btnIntentar.x = Global.WIDTH/2 - this.btnIntentar.width/2;
		this.btnIntentar.y= Global.HEIGHT/2 - this.btnIntentar.height+30;
	
		this.btnMenu = this.add.button(0,0,'Menu',this.ReturnToMenu,this)
		this.btnMenu.x = Global.WIDTH/2 - this.btnMenu.width/2;
		this.btnMenu.y= Global.HEIGHT/2 - this.btnMenu.height - 50;
	},

	startGame:function()
	{
		this.state.start('Game');
	},

	ReturnToMenu:function()
	{
		this.state.start('Menu');
	},

}