let ranks=[];


fetch("data/rank.json")

.then(response=>response.json())

.then(data=>{

ranks=data;

createRanks();

});



function createRanks(){


let container=
document.getElementById(
"rank-list"
);



ranks.forEach(rank=>{


let card=
document.createElement("div");


card.className=
"rank-card";


card.onclick=function(){

openRank(rank);

};



card.innerHTML=`

<h2>

${rank.name}

</h2>


<p>

${rank.level}

</p>

`;



container.appendChild(card);


});


}




function openRank(rank){


document.getElementById(
"rank-name"
).innerHTML=
rank.name;



document.getElementById(
"rank-info"
).innerHTML=
`

<b>${rank.level}</b>

<br><br>

${rank.description}

`;



document.getElementById(
"rank-modal"
)
.style.display="flex";


}




function closeRank(){


document.getElementById(
"rank-modal"
)
.style.display="none";


}