Menu = function(game)
{
	this.bg = null;
	this.title = null;
	this.btnStart = null;
	this.btnInstrucciones = null;
	this.cover = null;
}

Menu.prototype = 
{
	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');
		this.title = this.add.sprite(0,0,'Titulo');
		this.title.anchor.setTo(0.5,0.5);
		this.title.x = Global.WIDTH/2;
		this.title.y = 100;
		this.btnStart = this.add.button(0,0,'button-jugar',this.startGame,this,1,0,2);
		this.btnStart.x = Global.WIDTH/2 - this.btnStart.width/2;
		this.btnStart.y= Global.HEIGHT/2 - this.btnStart.height;
		this.btnInstrucciones = this.add.button(0,0,'button-instrucciones',this.instrucciones,this,1,0,2);
		this.btnInstrucciones.x = Global.WIDTH/2 - this.btnInstrucciones.width/2;
		this.btnInstrucciones.y= Global.HEIGHT/2 - this.btnInstrucciones.height + this.btnStart.height+10;
	},
	startGame:function()
	{
		this.state.start('Game');
	},
	instrucciones:function()
	{
		this.state.start('Instrucciones');
	}
}