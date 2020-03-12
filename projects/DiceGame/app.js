/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//1. HOW TO CREATE OUR FUNDAMENTAL GAME VARIBALE
//define all variables GLOBALLY
var scores, roundScore, activePlayer, dice, gamePlaying;

init(); 


//1. HOW TO SET UP AN EVENT LISTEN
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    //5. HOW TO CHANGE THE IMAGE IN A <IMG> ELEMENT
    diceDOM.src = 'dice-' +dice + '.jpg';

    //3. update the round score if the rolled number was not a 1

    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
       nextPlayer();
    }
}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) { 
    //add CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;

   //update the UI 
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

   //check if player won the game
if(scores[activePlayer] >= 30) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
    } else {
        //next player
        nextPlayer();
    }
}
});

function nextPlayer() { 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        //remove & add the active background
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //when player rolls 1, hide dice
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}





//we want to start with all zero as a base
 //keep track of the current player

//2. HOW TO GENERATE A RANDOM NUMBER
//dice = Math.floor(Math.random() * 6) + 1;

//3. HOW TO MANIPULATE THE DOM
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>';

//innerHTML set the html code inside the element
//textContent set the text as is

//4. HOW TO READ FROM THE DOM
//this is getter, this is how you read a text from the screen. and assign it to the variable x
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
//5. HOW TO CHANGE CSS STYLES
//CHANGE CSS
//document.querySelector('.dice').style.display = 'none';

//4. ANOTHER WAY TO SELECT ELEMENT BY IF