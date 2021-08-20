'use strict';

//This is the animation of the selector in the header
function moveSelector(id){
	var home = document.getElementById(id);
	var selector = document.getElementById("optionSelector");

	let pos = home.getBoundingClientRect();

	selector.style.top = ""+(10+pos.top+pos.height)+"px";
	selector.style.left = ""+(pos.left+pos.width/2)-selector.clientWidth/2+"px";
}

moveSelector("homeOption");


//This is the animation of the letters
function letterAnimationOver(id){
	var letter = document.getElementById(id);
	var i = 0;
	var interval = setInterval(function(){
		if(i > 50){
			
			setTimeout(function(){
				var interval2 = setInterval(function(){
					if(i < 0){
						clearInterval(interval2);
					}
					else{
						i--;
					}
						letter.style.backgroundPosition = "-"+(i*2)+"%";
						letter.style.fontSize = ""+(1+(i/250))+"em";
					},2)
				
			},100);

			clearInterval(interval);
			
		}
		else{
			i++;
		}
		letter.style.backgroundPosition = "-"+(i*2)+"%";
		letter.style.fontSize = ""+(1+(i/250))+"em";
	},2)
}
