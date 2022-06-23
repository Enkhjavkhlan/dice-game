//тоглогчийн ээлж хадгалах хувьсагч 0,1;
var activePlayer=0;

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
document.getElementById("score-0").textContent=0;//iluu hurdan ajillana. id r haih uchi # baih shaardlagagui

var x = document.querySelector(".dice");

document.querySelector('.btn-roll').addEventListener('click', function (){
    x.style.display = "block";
    var diceNumber = Math.floor(Math.random()*6)+1;
    x.src = 'dice-' + diceNumber + '.png';
    //console.log('too: ' + diceNumber);
    roundScore+=diceNumber;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
    if(diceNumber==1){
        roundScore=0;
        document.querySelector('#current-'+activePlayer).textContent=0;
        if(activePlayer==1){
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activePlayer=0;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        }
        else {
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activePlayer=1;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        }
    }
});//anonymouse func adilhan doorohtoi
/*
document.querySelector('.btn-roll').addEventListener('click', sjooShid);
function shooShid(){....}
*/

document.querySelector('.btn-hold').addEventListener('click', hold);

function hold(){
    if(roundScore==0)
        return 0;
    console.log("hold func");
    scores[activePlayer]+=roundScore;
    document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
    document.getElementById('current-'+activePlayer).textContent=0;
    roundScore=0;
    if(activePlayer==1){
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        activePlayer=0;
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    }
    else {
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        activePlayer=1;
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    }
    if(scores[0]>99){
        alert("player 1 ylla.");
        newGame();
    }
    if(scores[1]>99){
        alert("player 2 ylla.");
        newGame();
    }
}
document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    document.getElementById('score-1').textContent=0;
    document.getElementById('score-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('current-0').textContent=0; 
    scores = [0, 0];
    roundScore=0;
    activePlayer=0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('.player-'+1+'-panel').classList.remove('active');
}