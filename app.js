//тоглогчийн ээлж хадгалах хувьсагч 0,1;
var activePlayer=1;

//тоглогчдийн цуглуулсан хувьсагч
var scores = [0,0],  x=[];
//Идэвхтэй тоглогчийн ээлжийн оноо
var roundScore=0;
//шооны тоо 1-6
var dice = Math.floor(Math.random()*6)+1;

console.log('шоо: ' + dice);
//<div class="player-score" id="score-0">43</div>
//window.document.querySelector('#score-0').textContent = dice; //window bichq bj bolno, id uchir # baina. class bol . baina
//document.getElementById('score-0').textContent = dice;
//document.getElementById('Dice').src='dice-'+dice +'.png'; //zurag soloni

//document.querySelector('#score-1').innerHTML = "<em>Yes!<em>"; 
//GOL +++++++++++++++++

document.querySelector(".dice").style.display = "none";/*dice class in style iin display iin none bolgono. display 0 bol haragdq*/
document.querySelector(".player-name").style.color = "blue";
document.querySelector('#score-1').textContent=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#current-0').textContent=0; 
