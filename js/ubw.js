 //By Damian o sea el Shero/Toshi
//Que haces leyendo el codigo de mi firma? (?) Holi. 
 
//Esta madre es para que no haya problema con los ids, son unos cabrones porque se repite la firma(?)
	var i=0;
	$('.emiya').each(function(){
		i++;
		var newID='ubw'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	 
	//Si tengo 7 post o mas, se activa el ubw chant, que chidote
	if(i>6){
		var j;	
		for (j = 1; j <=i; j++) {
				console.log("i is: " + i + " and j is: " + j);
			if(j<8){
				document.getElementById("ubw" + j).src="https://shiharokuu.github.io/emiya-theme/chant" + (j+4) + ".html";
			}
		}
	}


