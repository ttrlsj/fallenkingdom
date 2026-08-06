let characters = [];


fetch("data/characters.json")

.then(response => response.json())

.then(data => {

    characters = data;

    createCards();

});



function createCards(){


    let container =
    document.getElementById(
        "character-list"
    );


    characters.forEach(character => {


        let card =
        document.createElement("div");


        card.className =
        "character-card";


        card.onclick = function(){

            openCharacter(character);

        };



        card.innerHTML = `

<div class="character-image">

<img src="images/characters/${character.name}.png">

</div>


<div class="emblem">

<img src="images/emblems/${character.emblem}.png">

</div>


<div class="character-info">


<h2>
${character.name}
</h2>


<p class="nation">

${character.nation}

</p>


<p>

${character.position}

</p>


<p class="rank">

${character.rank}

</p>


</div>

`;


        container.appendChild(card);


    });


}

function openCharacter(character){


let modal =
document.getElementById(
"character-modal"
);



let name =
document.getElementById(
"modal-name"
);



let info =
document.getElementById(
"modal-info"
);



name.innerHTML =
character.name;



info.innerHTML = `

<div class="modal-image">

<img src="images/characters/${character.name}.png">

</div>


<p>
<b>나이</b><br>
${character.age}세
</p>


<p>
<b>성별</b><br>
${character.gender}
</p>


<p>
<b>소속</b><br>
${character.nation}
</p>


<p>
<b>직위</b><br>
${character.position}
</p>


<p>
<b>경지</b><br>
${character.rank}
</p>


<hr>


<p>
<b>외형</b><br>
${character.appearance}
</p>


<p>
<b>체형</b><br>
${character.body}
</p>


<p>
<b>의상</b><br>
${character.clothes}
</p>


<p>
<b>성격</b><br>
${character.personality}
</p>


<p>
<b>애니어그램</b><br>
${character.enneagram}
</p>


<p>
<b>말투</b><br>
${character.speech}
</p>


<p>
<b>특징</b><br>
${character.feature}
</p>


`;



modal.style.display="flex";


}



function closeCharacter(){


document
.getElementById(
"character-modal"
)
.style.display="none";


}

function filterCharacters(nation){


let container =
document.getElementById(
"character-list"
);



container.innerHTML="";



characters.forEach(character=>{


if(
nation==="전체"
||
character.nation.includes(nation)
){


let card =
document.createElement("div");


card.className =
"character-card";


card.onclick=function(){

openCharacter(character);

};



card.innerHTML = `

<div class="character-image">


<img src="images/characters/${character.name}.png">


</div>


<div class="emblem">


<img src="images/emblems/${character.emblem}.png">


</div>


<div class="character-info">

${character.name}

</h2>


<p class="nation">

${character.nation}

</p>


<p>

${character.position}

</p>


<p class="rank">

${character.rank}

</p>


</div>

`;



container.appendChild(card);



}


});


}

const bgm =
document.getElementById("bgm");


const musicBtn =
document.getElementById("music-btn");



let musicPlaying=false;



musicBtn.onclick=function(){


if(musicPlaying){


bgm.pause();


musicBtn.innerHTML=
"🎵 음악 OFF";


}


else{


bgm.play();


musicBtn.innerHTML=
"🎵 음악 ON";


}



musicPlaying=
!musicPlaying;


};