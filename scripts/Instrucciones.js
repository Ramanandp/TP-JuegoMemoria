Instrucciones  = function(game)
{
	this.bg = null;
	this.txtInstruccion1 = null;
	this.btnRegresar = null;
}

Instrucciones.prototype =
{

	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');
		this.fontStyle = {font:'40px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		
		this.txtInstruccion1 = this.add.text(0,0,'INSTRUCCIONES',this.fontStyle);
		this.txtInstruccion1.anchor.setTo(0.5,0.5);
		this.txtInstruccion1.x = Global.WIDTH/2;
		this.txtInstruccion1.y = 50;

		this.fontStyle = {font:'25px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Juntar pares de cartas para obtener la victoria.',this.fontStyle);
		this.txtInstruccion1.x = 40;
		this.txtInstruccion1.y = 100;

		this.fontStyle = {font:'25px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Existen 3 modos de juego Original, Score y Practica:',this.fontStyle);
		this.txtInstruccion1.x = 40;
		this.txtInstruccion1.y = 130;

		this.fontStyle = {font:'25px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Original:',this.fontStyle);
		this.txtInstruccion1.x = 100;
		this.txtInstruccion1.y = 190;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Encontrar los pares antes de que el tiempo se termine.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 230;
		
		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Cada vez que se acabe el tiempo se perdera una vida.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 255;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Luego de perder una vida se reiniciara el juego.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 280;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Perder todas las vidas es Game over.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 305;

		this.fontStyle = {font:'25px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Score:',this.fontStyle);
		this.txtInstruccion1.x = 100;
		this.txtInstruccion1.y = 335;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Cada par encontrado suma 100*N_Combo puntos.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 360;
		
		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Cada seleccion fallida resta 100 puntos.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 385;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Quedar con 0 puntaje resta una vida y el puntaje vuelve a 1000.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 410;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Perder todas las vidas es Game over.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 435;

		this.fontStyle = {font:'25px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Practica:',this.fontStyle);
		this.txtInstruccion1.x = 100;
		this.txtInstruccion1.y = 465;

		this.fontStyle = {font:'20px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.txtInstruccion1 = this.add.text(0,0,'Buscar los pares iguales hasta ganar.',this.fontStyle);
		this.txtInstruccion1.x = 170;
		this.txtInstruccion1.y = 490;

		this.btnRegresar = this.add.button(0,0,'Regresar',this.Regresar,this);
		this.btnRegresar.anchor.setTo(0.5,0.5);
		this.btnRegresar.x = Global.WIDTH - 50;
		this.btnRegresar.y = Global.HEIGHT - 50;
	},

	Regresar:function()
	{
		this.state.start('Menu');
	}
}
