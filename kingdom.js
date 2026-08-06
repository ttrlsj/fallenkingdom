let kingdoms=[];


fetch("data/kingdoms.json")

.then(response=>response.json())

.then(data=>{

kingdoms=data;

createKingdomCards();


let params =
new URLSearchParams(
window.location.search
);


let country =
params.get("country");


if(country){


let target =
kingdoms.find(
kingdom =>
kingdom.name === country
);


if(target){

openKingdom(target);

}

}


});



function createKingdomCards(){


let container=
document.getElementById(
"kingdom-list"
);



kingdoms.forEach(kingdom=>{


let card=
document.createElement("div");


card.className=
"kingdom-card";

card.onclick=function(){

openKingdom(kingdom);

};


card.innerHTML=`


<div class="kingdom-emblem">

<img src="images/emblems/${kingdom.emblem}.png">

</div>


<h2>
${kingdom.name}
</h2>


<p>
${kingdom.region}
</p>

<p>

${kingdom.type}

</p>

<p>
${kingdom.description}
</p>


<p>
<b>기사단</b><br>
${kingdom.knight}
</p>


`;


container.appendChild(card);



});


}

function openKingdom(kingdom){


let modal =
document.getElementById(
"kingdom-modal"
);



let info =
document.getElementById(
"kingdom-info"
);



info.innerHTML = `


<div class="kingdom-detail">


<div class="kingdom-emblem">


<img src="images/emblems/${kingdom.emblem}.png">


</div>



<h2>

${kingdom.name}

</h2>


<p>

<b>국가 형태</b><br>

${kingdom.type}

</p>


<p>

<b>지역</b><br>

${kingdom.region}

</p>



<p>

<b>산업</b><br>

${kingdom.industry}

</p>



<p>

<b>문화</b><br>

${kingdom.culture}

</p>



<p>

<b>기사단</b><br>

${kingdom.knight}

</p>



<hr>



<p>

${kingdom.description}

</p>


</div>


`;



modal.style.display="flex";


}




function closeKingdom(){


document
.getElementById(
"kingdom-modal"
)
.style.display="none";


}

window.onload=function(){


let params =
new URLSearchParams(
window.location.search
);


let country =
params.get("country");


if(country){


let target =
kingdoms.find(
kingdom =>
kingdom.name === country
);


if(target){

openKingdom(target);

}


}


}