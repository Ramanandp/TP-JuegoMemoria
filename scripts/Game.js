Game  = function(game)
{
	this.bg = null;
	this.btnRegresar = null;
	this.btnModoOriginal = null;
	this.btnModoScore = null;
	this.btnModoPractica =null;
	this.tittle = null;
}

Game.prototype =
{

	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');
		this.title = this.add.sprite(0,0,'Titulo');
		this.title.anchor.setTo(0.5,0.5);
		this.title.x = Global.WIDTH/2;
		this.title.y = 100;

		this.btnRegresar = this.add.button(0,0,'Regresar',this.Regresar,this);
		this.btnRegresar.anchor.setTo(0.5,0.5);
		this.btnRegresar.x = 50;
		this.btnRegresar.y = 50;

		this.btnModoScore = this.add.button(0,0,'button-score',this.ModoScoreAlto,this);
		this.btnModoScore.anchor.setTo(0.5,0.5);
		this.btnModoScore.x = Global.WIDTH/2;
		this.btnModoScore.y = Global.HEIGHT/2-10;

		this.btnModoOriginal = this.add.button(0,0,'button-original',this.ModoOriginal,this);
		this.btnModoOriginal.anchor.setTo(0.5,0.5);
		this.btnModoOriginal.x = Global.WIDTH/2;
		this.btnModoOriginal.y = Global.HEIGHT/2-this.btnModoScore.height-30;

		this.btnModoPractica = this.add.button(0,0,'button-practica',this.ModoPractica,this);
		this.btnModoPractica.anchor.setTo(0.5,0.5);
		this.btnModoPractica.x = Global.WIDTH/2;
		this.btnModoPractica.y = Global.HEIGHT/2+this.btnModoScore.height+10;
	},

	Regresar:function()
	{
		this.state.start('Menu');
	},

	ModoOriginal:function()
	{
		this.state.start('Modo_Original');
	},

	ModoPractica:function()
	{
		this.state.start('Modo_Practica');
	},

	ModoScoreAlto:function()
	{
		this.state.start('Modo_Score');
	}

}