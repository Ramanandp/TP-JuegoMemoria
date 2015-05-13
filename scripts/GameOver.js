GameOver = function(game){
	this.bg = null;
	this.btnIntentar = null;
}

GameOver.prototype = {
	create:function(){
		this.bg = this.add.sprite(0,0,'background');
		this.btnIntentar = this.add.button(0,0,'button-intentar',this.startGame,this,1,0,2);
		this.btnIntentar.x = Global.WIDTH/2 - this.btnIntentar.width/2;
		this.btnIntentar.y= Global.HEIGHT/2 - this.btnIntentar.height;
	},
	startGame:function(){
		this.state.start('Game')
	},
}