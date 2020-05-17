/*jshint esversion: 6 */

// Create board with tiles
var board = document.querySelector('.board');
for (var i = 1; i < 4; i++) {
  tileRow = document.createElement('div');
  tileRow.className = 'row'+[i];
  board.appendChild(tileRow);
}
for (var a = 1; a < 11; a++) {
  var tileRow = document.querySelector('.row1');
  var tile = document.createElement('div');
  var tileNumber = [a];
  tile.className = 'tile';
  tile.id = 'tile-'+[a];
  tileRow.appendChild(tile);
}
for (var b = 11; b < 21; b++) {
  var tileRow = document.querySelector('.row2');
  var tile = document.createElement('div');
  var tileNumber = [b];
  tile.className = 'tile';
  tile.id = 'tile-'+[b];
  tileRow.appendChild(tile);
}
for (var c = 21; c < 31; c++) {
  var tileRow = document.querySelector('.row3');
  var tile = document.createElement('div');
  var tileNumber = [c];
  tile.className = 'tile';
  tile.id = 'tile-'+[c];
  tileRow.appendChild(tile);
}

// Get players from local localStorage
var player1 = localStorage.getItem('player0');
var player2 = localStorage.getItem('player1');

var currentPlayer = 1;

// Put players on the page
var p1 = document.querySelector('.player1');
p1.classList.add('current-player');
var status1 = document.createElement('p');
var status2 = document.createElement('p');
status1.innerHTML = "Player 1, it's your turn";
var p2 = document.querySelector('.player2');
var token1 = document.createElement('img');
var token2 = document.createElement('img');
token1.className = ('player1-icon');
token2.className = ('player2-icon');
token1.setAttribute('width', '50px');
token2.setAttribute('width', '50px');
var title1 = document.createElement('h4');
var title2 = document.createElement('h4');
title1.innerHTML = player1;
title2.innerHTML = player2;
switch(title1.innerHTML) {
  case 'Tyrion Lannister':
  token1.setAttribute("src", "icons/lannister.png");
  break;
  case 'Cersei Lannister':
  token1.setAttribute("src", "icons/lannister.png");
  break;
  case 'Arya Stark':
  token1.setAttribute("src", "icons/stark.png");
  break;
  case 'Jon Snow':
  token1.setAttribute("src", "icons/stark.png");
  break;
  case 'Daenerys Targaryen':
  token1.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Viserys Targaryen':
  token1.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Ygritte':
  token1.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Tormund':
  token1.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Margaery Tyrell':
  token1.setAttribute("src", "icons/tyrell.png");
  break;
  case 'Olenna Redwyne':
  token1.setAttribute("src", "icons/tyrell.png");
  break;
}
switch(title2.innerHTML) {
  case 'Tyrion Lannister':
  token2.setAttribute("src", "icons/lannister.png");
  break;
  case 'Cersei Lannister':
  token2.setAttribute("src", "icons/lannister.png");
  break;
  case 'Arya Stark':
  token2.setAttribute("src", "icons/stark.png");
  break;
  case 'Jon Snow':
  token2.setAttribute("src", "icons/stark.png");
  break;
  case 'Daenerys Targaryen':
  token2.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Viserys Targaryen':
  token2.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Ygritte':
  token2.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Tormund':
  token2.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Margaery Tyrell':
  token2.setAttribute("src", "icons/tyrell.png");
  break;
  case 'Olenna Redwyne':
  token2.setAttribute("src", "icons/tyrell.png");
  break;
}
p1.appendChild(status1);
p1.appendChild(token1);
p1.appendChild(title1);
p2.appendChild(status2);
p2.appendChild(token2);
p2.appendChild(title2);
var p1img = token1.src;
var p2img= token2.src;

//Set counter for both players
var player1progress = 1;
var player2progress = 1;

// Put players on the first tile
var current1 = document.getElementById('tile-'+player1progress);
var token1 = document.createElement('img');
var token2 = document.createElement('img');
token1.setAttribute('src',p1img);
token2.setAttribute('src',p2img);
token1.className=('icon-1');
token2.className=('icon-2');
current1.appendChild(token1);
current1.appendChild(token2);

// Set traps
function traps1(){
  var status = document.getElementById('status');
  switch(player1progress) {
    case 7:
    status.innerHTML = "Player 1 broke a leg and has to skip a turn.";
    currentPlayer = 2;
    break;
    case 16:
    player1progress = player1progress-5;
    status.innerHTML = "Player 1 met a White Walker and has to backtrack to find a place to hide. Go back five tiles.";
    break;
    case 19:
    player1progress = 13;
    status.innerHTML = "Player 1 is very tired. There is a tavern on tile 13. Go get some rest.";
    break;
    case 21:
    currentPlayer = 2;
    status.innerHTML = "Player 1 broke a leg. Skip a turn.";
    break;
    case 26:
    player1progress = 0;
    status.innerHTML += "Oh no. Player 1 passed out and woke up at the start.";
    break;
  }
}
  function traps2(){
    var status = document.getElementById('status');
    switch(player2progress) {
     case 7:
      currentPlayer = 2;
      status.innerHTML = "Player 2 broke a leg and has to skip a turn.";
      break;
      case 16:
      player2progress = player2progress-5;
      status.innerHTML = "Player 2 met a White Walker and has to backtrack to find a place to hide. Go back five tiles.";
      break;
      case 19:
      player2progress = 13;
      status.innerHTML = "Player 2 is very tired. There is a tavern on tile 13. Go get some rest.";
      break;
      case 21:
      currentPlayer = 2;
      status.innerHTML = "Player 2 broke a leg. Skip a turn.";
      break;
      case 26:
      player2progress = 0;
      status.innerHTML += "Oh no. Player 1 passed out and woke up at the start.";
      break;
    }
  }

// When player 1 rolls dice
  function turn1(){
    var randomNumber = Math.ceil(Math.random()*6);
    var dice = document.getElementById('dice');
    dice.classList.add('rotate');
    var status = document.getElementById('status');
    status.innerHTML = "Player 1 rolled "+randomNumber+'.';
    player1progress = player1progress+randomNumber;
    function moveToken1(){
      if (player1progress < 30){
        current1 = document.getElementById('tile-'+player1progress);
        current1.appendChild(token1);
      } else {
        localStorage.setItem('winner', title1.innerHTML);
        window.location = "finale.html";
      }
    }
  //  Change the image on the dice to correspond with the random number
    switch(randomNumber){
      case 1:
      dice.setAttribute("src", "icons/1.png");
      currentPlayer = 2;
      break;
      case 2:
      dice.setAttribute("src", "icons/2.png");
      currentPlayer = 2;
      break;
      case 3:
      dice.setAttribute("src", "icons/3.png");
      currentPlayer = 2;
      break;
      case 4:
      dice.setAttribute("src", "icons/4.png");
      currentPlayer = 2;
      break;
      case 5:
      dice.setAttribute("src", "icons/5.png");
      currentPlayer = 2;
      break;
      case 6:
      dice.setAttribute("src", "icons/6.png");
      currentPlayer = 1;
      status.innerHTML = "You rolled "+randomNumber+', you get a free turn!';
      break;
    }
    setTimeout(() => {
      moveToken1();
    }, 500);
  }

// When player 2 rolls dice
  function turn2(){
    var randomNumber = Math.ceil(Math.random()*6);
    var dice = document.getElementById('dice');
    dice.classList.add('rotate');
    var status = document.getElementById('status');
    status.innerHTML = "Player 2 rolled "+randomNumber+'.';
    player2progress = player2progress+randomNumber;
    function moveToken2(){
      if (player2progress < 30){
        current2 = document.getElementById('tile-'+player2progress);
        current2.appendChild(token2);
      } else {
        localStorage.setItem('winner', title2.innerHTML);
        window.location = "finale.html";
      }
    }
  //  Change the image on the dice to correspond with the random number
    switch(randomNumber){
      case 1:
      dice.setAttribute("src", "icons/1.png");
      currentPlayer = 1;
      break;
      case 2:
      dice.setAttribute("src", "icons/2.png");
      currentPlayer = 1;
      break;
      case 3:
      dice.setAttribute("src", "icons/3.png");
      currentPlayer = 1;
      break;
      case 4:
      dice.setAttribute("src", "icons/4.png");
      currentPlayer = 1;
      break;
      case 5:
      dice.setAttribute("src", "icons/5.png");
      currentPlayer = 1;
      break;
      case 6:
      dice.setAttribute("src", "icons/6.png");
      status.innerHTML = "You rolled "+randomNumber+', you get a free turn!';
      currentPlayer = 2;
      break;
    }
    setTimeout(() => {
      moveToken2();
    }, 500);
  }

// Roll dice when button is clicked
var button = document.getElementById('button');
button.addEventListener('click', function() {
  if (currentPlayer === 1) {
    turn1();
    setTimeout(() => {
      traps1();
    }, 1000);
    if (currentPlayer === 2){
      setTimeout(() => {
        status.innerHTML = " ";
        p1.classList.remove('current-player');
        p2.classList.remove('opacity');
        p1.classList.add('opacity');
        p2.classList.add('current-player');
        status1.innerHTML = "";
        status2.innerHTML = "Player 2, it's your turn";
        dice.classList.remove('rotate');
      }, 1500);
    }
  } else {
    turn2();
    setTimeout(() => {
      traps2();
    }, 1000);
    if (currentPlayer === 1){
      setTimeout(() => {
        status.innerHTML = " ";
        p2.classList.remove('current-player');
        p1.classList.remove('opacity');
        p2.classList.add('opacity');
        p1.classList.add('current-player');
        status1.innerHTML = "Player 1, it's your turn";
        status2.innerHTML = "";
        dice.classList.remove('rotate');
      }, 1500);
    }
  }
});
