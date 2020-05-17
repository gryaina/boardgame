/*jshint esversion: 6 */

// API call
var call = new XMLHttpRequest();
call.open('GET','https://cors-anywhere.herokuapp.com/raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json');
call.send();
call.onload = function() {
  var list = JSON.parse(call.responseText);

  // Create new list containing 10 chosen characters
  var newList = list.filter(person => person.Id === 16 || person.Id === 148 || person.Id === 238 || person.Id === 271 || person.Id === 583 || person.Id === 784 || person.Id === 1052 || person.Id === 1079 || person.Id === 2126 || person.Id === 2024);

  // Loop through list and create a card for each character
  for (var i = 0 ; i < newList.length ; i++){
    var container = document.querySelector('.characters');
    var card = document.createElement('div');
    card.className = 'card';
    var image = document.createElement('img');
    image.setAttribute("width", "80px");
    var title = document.createElement('p');
    title.textContent = newList[i].Name;
    card.appendChild(image);
    card.appendChild(title);
    container.appendChild(card);
    // Put icons on the right character
    switch(newList[i].Id) {
      case 16:
      case 784:
      image.setAttribute("src", "icons/tyrell.png");
      break;
      case 583:
      case 148:
      image.setAttribute("src", "icons/stark.png");
      break;
      case 1052:
      case 238:
      image.setAttribute("src", "icons/lannister.png");
      break;
      case 2024:
      case 2126:
      image.setAttribute("src", "icons/freefolk.png");
      break;
      case 1079:
      case 271:
      image.setAttribute("src", "icons/targaryen.png");
      break;
    }
  }
  // Add style to selected elements
  const selection = document.querySelectorAll('.card');
  selection.forEach(function(card) {
    card.addEventListener('click', function(event) {
      if (card.className !== 'card selected'){
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
   });
 });
 let text = document.querySelector('h2');
 text.innerHTML = 'Select two characters to begin playing.';

   // Only 2 characters can be selected
 var button = document.querySelector('.button');
 button.addEventListener('click',function(event) {
   let selected = document.querySelectorAll('.selected');
   if (selected.length > 2) {
     event.preventDefault();
     text.textContent= 'I like your enthusiasm, but this game only works with two players.';
     text.classList.add('error');
   } else if (selected.length <= 1) {
     event.preventDefault();
     text.textContent= 'This game is more fun with an opponent. Pick one more character.';
     text.classList.add('error');
   } else {
     for (var i = 0 ; i < selected.length ; i++){
       localStorage.setItem('player'+i, selected[i].textContent);
     }
   }
 });
};
