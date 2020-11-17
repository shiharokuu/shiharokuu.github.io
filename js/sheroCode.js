 //By Damian o sea el Shero/Toshi
//¿Qué haces leyendo el código de mi firma? (?) Holi. 


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//Randomiza array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
} 

//Calcula HP
function getHP(vit, res) {
  var base = 50;
  return base + (vit*10)+(Math.round(res/2));   // The function returns the HP of my character
}


//Calcula Prana
function getMP(prana, mana) {
  var base = 40;
  return base + (prana*10)+(Math.round(mana/2));   // The function returns the MP of my character
}

//Calcula rango stat
function rangoStat(stat) {
  if(stat>40){
	return "A"
  }
  else if(stat>30){
	return "B"
  }
  else if(stat>20){
	return "C"
  }
  else if(stat>10){
	return "D" 
  }
  
  return "E"
  
}
	  
//Stats de SHero, inicialziar

atk = 0
vit = 0
resF = 0
resM = 0
preci = 0
ref = 0
atkM = 0
prana = 0
prob = 0
crit = 0
np = 0
	

	  
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200) {
    var sheroPOWER = JSON.parse(this.responseText);
  	atk = sheroPOWER.atk;
	vit = sheroPOWER.vit;
	resF = sheroPOWER.resF;
	resM = sheroPOWER.resM;
	res = resF + resM
	preci = sheroPOWER.preci;
	ref = sheroPOWER.ref;
	atkM = sheroPOWER.atkM;
	prana = sheroPOWER.prana;
	mana = prana + atkM;
	prob = sheroPOWER.prob;
	crit = sheroPOWER.crit;
	np = sheroPOWER.np;
	skill = sheroPOWER.skill;
	//console.log(skill[0].effect)
	document.getElementById("hp").innerHTML = getHP(vit,res);
	document.getElementById("mana").innerHTML = getMP(prana,mana);
    document.getElementById("atk").innerHTML = atk;
	document.getElementById("vit").innerHTML = vit;
	document.getElementById("resF").innerHTML = resF;
	document.getElementById("resM").innerHTML = resM;
	document.getElementById("preci").innerHTML = preci;
	document.getElementById("ref").innerHTML = ref;
	document.getElementById("atkM").innerHTML = atkM;
	document.getElementById("prana").innerHTML = prana;
	document.getElementById("prob").innerHTML = prob;
	document.getElementById("crit").innerHTML = crit;
	document.getElementById("np").innerHTML = np;
	document.getElementById("fuerza").innerHTML = rangoStat(atk+vit);
	document.getElementById("resistencia").innerHTML = rangoStat(res);
	document.getElementById("agilidad").innerHTML = rangoStat(preci+ref);
	document.getElementById("manaRango").innerHTML = rangoStat(mana);
	document.getElementById("criticoRango").innerHTML = rangoStat(prob+crit);
    sheroSkillsName = "<div class='tab'>"
	sheroSkillsDesc = ""
	
    j = 0;
	for (i of skill) {
		if(j==0){
			sheroSkillsName = sheroSkillsName + "<button class=\"\ tablinks\"\ onclick=\"\openCity(event, '" + i.shortName + "')\"\ id=\"\defaultOpen\"\>" + i.shortName + "</button>"
			j+=1
		}
		else{
			sheroSkillsName = sheroSkillsName + "<button class=\"\ tablinks\"\ onclick=\"\openCity(event, '" + i.shortName + "')\"\>" + i.shortName + "</button>"
		}
		code = "<div id='" + i.shortName +  "' class='tabcontent'><h3 style='color:#e2664a'>" + i.name + "</h3>";
		code = code + "<p>" + i.desc +"</p>";
		code = code + "<p style='color:#fff3ab;'>" + i.effect +"</p></div>";
		sheroSkillsDesc = sheroSkillsDesc + code;
	}
	sheroSkillsName = sheroSkillsName + "</div>";
	sheroSkills = sheroSkillsName + sheroSkillsDesc;
	document.getElementById("sheroSkills").innerHTML = sheroSkills;
	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
	
  }
};

xmlhttp.open("GET", "https://shiharokuu.github.io/json/sheroStats.json", true);
xmlhttp.send();

 //Cargamos el reproductor
     audiojs.events.ready(function() {
        audiojs.createAll();
      });

    //shuffleArray(mp3);
	var trace1 = Math.floor(Math.random() * mp3.length);
    //shuffleArray(sheroQuotes);
	var trace2 = Math.floor(Math.random() * sheroQuotes.length);
    //shuffleArray(sheroIMG);
	var trace3 = Math.floor(Math.random() * sheroIMG.length);
	//var sheroMusic = '<audio  src="' + mp3[trace1] + '" preload="auto"></audio>'
	// var imgCode ='<img src="'+ sheroIMG[trace3] + '" alt="Shero" class="sheroImage">';
	var sheroSays = '"' + sheroQuotes[trace2] + '"';
	var css = '<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/shiharokuu/rpgstuff/8a09985069a73df17b4447698deaa13f6e7d994c/sheroStyle.css">'
	//document.getElementById("sheroSignature").innerHTML=sheroMusic+imgCode+sheroSays+css;	
	document.getElementById("sheroSays").innerHTML=sheroSays;	
	document.getElementById("sheroGIF").src=sheroIMG[trace3];	
	document.getElementById("sheroMusic").src=mp3[trace1];	
