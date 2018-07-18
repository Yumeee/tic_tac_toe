document.addEventListener("DOMContentLoaded", function(){

// initialize board
var table = document.querySelector('table');
var squares = document.querySelectorAll('td');
var winGame = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [1,5,9],
  [2,5,7],
  [3,6,9],
  [3,5,7],
]
var game = 0;

// alternate between O and X depending on the game round. Start with O.
function player() {
  if (game % 2 == 0) {
    return 'O';}
  else {
    return 'X';}
  }

// Game adds 1 as a player plays.
squares.forEach(function(square){
  square.addEventListener('click', function() {
    if (square.innerText == '') {
      square.innerText = player();
    }
    else {
      square.disabled = true;
    }
    game += 1;
  });
});




});
