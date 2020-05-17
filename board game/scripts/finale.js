/*jshint esversion: 6 */

// Get winner from local localStorage
var winner = localStorage.getItem('winner');

// Put winner on the page
var headline = document.querySelector('h2');
headline.innerHTML = winner + ", you are the new ruler of the seven kingdoms. The throne is yours.";
img = document.querySelector('.icon');
switch(winner) {
  case 'Tyrion Lannister':
  img.setAttribute("src", "icons/lannister.png");
  break;
  case 'Cersei Lannister':
  img.setAttribute("src", "icons/lannister.png");
  break;
  case 'Arya Stark':
  img.setAttribute("src", "icons/stark.png");
  break;
  case 'Jon Snow':
  img.setAttribute("src", "icons/stark.png");
  break;
  case 'Daenerys Targaryen':
  img.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Viserys Targaryen':
  img.setAttribute("src", "icons/targaryen.png");
  break;
  case 'Ygritte':
  img.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Tormund':
  img.setAttribute("src", "icons/freefolk.png");
  break;
  case 'Margaery Tyrell':
  img.setAttribute("src", "icons/tyrell.png");
  break;
  case 'Olenna Redwyne':
  img.setAttribute("src", "icons/tyrell.png");
  break;
}

var button = document.querySelector('.button');
button.addEventListener('click',function(event) {
  localStorage.clear();
});
