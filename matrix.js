(function (fallspeed, fadespeed){
	"use strict";

	var c = document.getElementById("c");
	var ctx = c.getContext("2d");

	c.height = window.innerHeight;
	c.width = window.innerWidth;

	var charset = "ムタ二コクシモラキ7リエスハヌトユ1ß";
	charset = charset.split("");

	var font_size = 50;
	var columns = Math.ceil(c.width/font_size); 
	var drops = [];
	for(var x = 0; x < columns; x++){
		drops[x] = Math.floor(Math.random() * columns);
	}
	setInterval(function (){
		ctx.fillStyle = "rgba(0, 0, 0, " + fadespeed + ")";
		ctx.fillRect(0, 0, c.width, c.height);

		for(var i = 0; i < drops.length; i++){
			var character = charset[Math.floor(Math.random() * charset.length)];

			ctx.fillStyle = "#030"; //green text
			ctx.font = "bold " + font_size + "px arial";
			ctx.fillText(character, i * font_size - 2, drops[i] * font_size - 3);

			ctx.fillStyle = "#0B0"; //green text
			ctx.font = "bold " + font_size + "px arial";
			ctx.fillText(character, i * font_size, drops[i] * font_size);

			if(drops[i] * font_size > c.height 
			   && Math.random()  > 0.975
			  ){
				drops[i] = 0;
			}

			drops[i]++;
		}
	}, fallspeed);
})(30,0.20);
