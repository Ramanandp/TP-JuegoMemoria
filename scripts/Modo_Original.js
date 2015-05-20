Modo_Original = function(game)
{
	this.bg = null;
	this.btnRegresar = null;
	this.timeCreated = 0;
	this.textTiempo = null; //usar para el tiempo
	this.textCombo = null; //usar para el combo
	this.combo = 1;
	this.fontStyle = null;
	this.timer = 0;
	this.tiempoTranscurrido = 0;
	this.cartas = null;
	this.opcionesCartas = null;
	this.cartaEsc1 = null;
	this.cartaEsc2 = null;
	this.paresEncontrados = 0;

	//configurar para el juego
	this.timeLimit = 30; //tiempo del timer
	this.NCartas = 4; //quiere decir que seria una matriz 4x4 = 16 cartas en total
	this.tiempoVoltear = 500; //el tiempo en ms que se demora en voltear boca abajo las cartas
}

Modo_Original.prototype = 
{
	create:function()
	{
		this.bg = this.add.sprite(0,0,'background');	

		this.btnRegresar = this.add.button(0,0,'Regresar',this.Regresar,this);
		this.btnRegresar.anchor.setTo(0.5,0.5);
		this.btnRegresar.x = 50;
		this.btnRegresar.y = 50;

		this.paresEncontrados = 0;
		this.combo = 1;
		this.timeLimit = 30;
		//crear las 16 cartas
		this.crearCartas();

		//texto para timer
		this.fontStyle = {font:'40px Arial',fill:'#FFCC00',stroke: "#333", strokeThickness: 5};
		this.textTiempo = this.add.text(Global.WIDTH - 60,15,'0',this.fontStyle);
		this.textCombo = this.add.text(30,60,'Combo: x' + this.combo ,this.fontStyle);

		this.tiempoTranscurrido = this.time.totalElapsedSeconds();

	},

	update:function(){
		if(this.paresEncontrados >= this.NCartas*2)
		{
			this.state.start('Win');			
		}

		this.countDownTimer();
		
		if(this.cartaEsc1 != null && this.cartaEsc2 != null)
		{
			this.timeCreated += this.time.elapsed;
			if(this.timeCreated > this.tiempoVoltear)
			{
				this.voltearCartas();
			}
		}

	},
	crearCartas:function(){
		//llenar arreglo con los posibles ids (del 0 al 7 pero repitiendo los numeros)
		this.opcionesCartas = []; 
		for(var i = 0; i < this.NCartas*2; i++)
		{
			this.opcionesCartas[i*2] = i;
			this.opcionesCartas[i*2 + 1] = i; 	
		}
		//nos queda un arreglo [0,0,1,1,2,2, etc], asi que randomizamos los elementos usando esta funcion
		this.shuffle(this.opcionesCartas);
		this.cartas = this.add.group();

		for(var i = 0; i < this.NCartas; i++) 
		{
		    for(var j = 0; j < this.NCartas; j++) 
		    {
		        var carta = this.add.sprite(0,0,'carta');
		        //el frame 52 es el de la carta volteada
		        carta.frame = 52;
		        //aqui le decimos que carta es
		        carta.name = this.opcionesCartas[j + i*4];
				carta.width = 80;
				carta.height = 116;
				carta.x = (carta.width+10)*i;
				carta.y = (carta.height+10)*j;
				carta.inputEnabled = true;
				carta.events.onInputDown.add(this.mostrarCarta.bind(this));
				this.cartas.add(carta);
		    }
		}

		this.cartas.x = Global.WIDTH/2 - this.cartas.width/2;
		this.cartas.y = Global.HEIGHT/2 - this.cartas.height/2;
		
	},

	mostrarCarta:function(sprite)
	{
		if(this.cartaEsc1 != null && this.cartaEsc2 != null) return;
		if(sprite.frame != 52) return;

		sprite.frame = parseInt(sprite.name);		

		if(this.cartaEsc1 == null)
		{
			this.cartaEsc1 = sprite;			
		}

		else
		{
			if(this.cartaEsc1 != sprite)
				this.cartaEsc2 = sprite;
		}
		
	},
	voltearCartas:function() {
		this.timeCreated = 0;

		if(this.cartaEsc1.name == this.cartaEsc2.name)
		{
			this.combo += 1;
			this.paresEncontrados ++;
		}

		else

		{
			this.combo = 1;
			this.cartaEsc1.frame = 52;
			this.cartaEsc2.frame = 52;			
		}

		this.textCombo.text = 'Combo: x' + this.combo;
		this.cartaEsc1 = null;
		this.cartaEsc2 = null;	
	    
	},

	countDownTimer:function() {  
  		this.textTiempo.text = Math.ceil(this.timer);	    
	  
	    mySeconds = this.time.totalElapsedSeconds() - this.tiempoTranscurrido;
	    this.timer = this.timeLimit - mySeconds;
	    

	    if (this.timer <= 0)
	    {
	        this.state.start('GameOver');	        	         
	    }
	    
	},
	shuffle:function(array) {
		//esta es una funcion que encontre en internet que te permite randomizar los elementos en un array
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) 
		{
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
	},

	Regresar:function()
	{
		this.state.start('Game');
	}


}
