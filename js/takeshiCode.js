 //By Damian/Kenta/Shiharoku
//¿Qué haces leyendo el código de mi firma? (?) Holi. 


function openTabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Randomiza array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
} 


function rand( lowest, highest){
    var adjustedHigh = (highest - lowest) + 1;       
    return Math.floor(Math.random()*adjustedHigh) + parseFloat(lowest);
}

//Shuffle Traces
	var trace1 = rand(0,mp3.length-1);
	var trace2 = rand(0,pjQuotes.length-1);
	var trace3 = rand(0,pjIMG.length-1);

//HTML GENERATOR
	const variant1 = "#ABB5CB";
	const variant2 = "#ABABAB"; 
	const signature = document.getElementById('kenta');
//Create Audio Tag
	const audio = document.createElement('audio');
	audio.setAttribute("src", mp3[trace1]);
	audio.setAttribute("preload","auto");
	signature.appendChild(audio);
//Create IMG
	const img = document.createElement('img');
	img.classList.add('pjImage');
	img.setAttribute("src", pjIMG[trace3]);
	img.setAttribute("alt", "By Damian/Kenta/Shiharoku");
	signature.appendChild(img);

//Create TEXT
	const textBlock = document.createElement('div');
	textBlock.classList.add('pjText');
	signature.appendChild(textBlock);

//Create Ability
	const ability = document.createElement('div');
	ability.classList.add('pjHab');
	ability.innerHTML = "Habilidades ";
	textBlock.appendChild(ability);
//Create Ability Text
	const abilityText = document.createElement('div');
	abilityText.classList.add('pjHabText');
	//Create abilityTab
	const abilityTab = document.createElement('div');
	abilityTab.classList.add('tab');
	//create deafaultButton
	const buttonDefault = document.createElement('button');
	buttonDefault.classList.add('tablinks');
    j = 0;
	for (i of skill) {
		if(j==0){
			buttonDefault.setAttribute("onclick", "openTabs(event, '" + i.shortName + "')");
			buttonDefault.innerHTML = i.shortName;
			abilityTab.appendChild(buttonDefault);
			j+=1
		}
		else{
			var buttonTab = document.createElement('button');
			buttonTab.classList.add('tablinks');
			buttonTab.setAttribute("onclick", "openTabs(event, '" + i.shortName  + "')");
			buttonTab.innerHTML = i.shortName;
			abilityTab.appendChild(buttonTab);
		}
	}
	abilityText.appendChild(abilityTab);
	for (i of skill) {
		//Create tabContent
		var tabContent = document.createElement('div');
		tabContent.classList.add('tabcontent');
		tabContent.id = i.shortName;
		abilityText.appendChild(tabContent);
		//Create H3 with ability name
		var abilityName = document.createElement('h3');
		abilityName.style.color = variant1;
		abilityName.innerHTML = i.name;
		tabContent.appendChild(abilityName);
		//Create p with ability description
		var abilityDesc = document.createElement('p');
		abilityDesc.innerHTML = i.desc;
		tabContent.appendChild(abilityDesc);
		//Create p with ability effect
		var abilityEffect = document.createElement('p');
		abilityEffect.style.color = variant2;
		abilityEffect.innerHTML = i.effect;
		tabContent.appendChild(abilityEffect);
	}
	ability.appendChild(abilityText);
	// Get the element with id="defaultOpen" and click on it
	buttonDefault.click();	
//Create Quote
	const quote = document.createElement('span');
	quote.classList.add('pjQUOTE');
	quote.innerHTML = '"' + pjQuotes[trace2] + '"';
	textBlock.appendChild(quote);
	
	
//Create Signature Bottom
	const sigBottom = document.createElement('div');
	sigBottom.classList.add('sigBottom');
	textBlock.appendChild(sigBottom);
//Create HP BLOCK
	const hpBlock = document.createElement('div');
	hpBlock.classList.add('hpBlock');
	sigBottom.appendChild(hpBlock);
	//Create HP 
		const hp = document.createElement('span');
		hp.style.color = variant1;
		hp.innerHTML = stats[0].name + ": ";
		hpBlock.appendChild(hp);
		const hpValue = document.createElement('span');
		hpValue.innerHTML = stats[0].value;
		hpBlock.appendChild(hpValue);
//Create statTip
	const statsTip = document.createElement('span');
	statsTip.classList.add('statsTip');
	statsTip.innerHTML = "<a title='Ficha de Personaje' href='https://jujutsukaisen-rol.foroactivo.com/t23-sensho-takeshi-id#43' target='_blank'><ruby><rb>戰勝 武士</rb><rp>（</rp><rt>Senshō Takeshi</rt><rp>）</rp></ruby></a>";
	sigBottom.appendChild(statsTip);
/*
	const tableTip = document.createElement('table');
	tableTip.classList.add('statsTiptext');
	statsTip.appendChild(tableTip);
	const bodyTip = document.createElement('tbody');
	tableTip.appendChild(bodyTip);
	for (let i =0;i<stats.length;i=i+2){
		var tr = document.createElement('tr');
		bodyTip.appendChild(tr);
		tr.appendChild(stateMaker(i));
		tr.appendChild(stateMaker(i+1));

	}
	*/
//Create HP BLOCK
	const mpBlock = document.createElement('div');
	mpBlock.classList.add('mpBlock');
	sigBottom.appendChild(mpBlock);
	//Create MP
		const mp = document.createElement('span');
		mp.classList.add('pjBars2');
		mp.style.color = variant1;
		mp.innerHTML = stats[1].name + ": ";
		mpBlock.appendChild(mp);
		const mpValue = document.createElement('span');
		mpValue.innerHTML = stats[1].value;
		mpBlock.appendChild(mpValue);
		


	
//Cargamos el reproductor
     audiojs.events.ready(function() {
        audiojs.createAll();
      });



function stateMaker(i){
	var td = document.createElement('td');
	//State Name
	var sName = document.createElement('span');
	sName.style.color = variant2;
	sName.innerHTML = stats[i].name + ": ";
	td.appendChild(sName);
	
	//State Value
	var sValue = document.createElement('span');
	sValue.innerHTML = stats[i].value;
	td.appendChild(sValue);
	
	return td;
}


