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
  [2,5,8],
  [3,6,9],
  [3,5,7],
]
var game = 0;


// Game count adds 1 as a player plays.
squares.forEach(function(square){
  square.addEventListener('click', function() {
    if (square.innerText == '') {
      square.innerText = player();
    }
    else {
      square.disabled = true;
    }
    checkWin();
    game+=1;
  });
});

// alternate between O and X depending on the game round. Start with O.
function player() {
  if (game % 2 == 0) {
    return 'O';}
    else {
      return 'X';}
    }


// if winGame matches with location of X and Os, stop the game
var winLine = document.querySelector('.winning-line');

function checkWin(){
  winGame.forEach(function(set) {
    var one = squares[set[0]-1].innerText
    var two = squares[set[1]-1].innerText
    var three = squares[set[2]-1].innerText

    if (one != '' && one === two && one === three) {
      winLine.innerHTML = "Player "+ "'" + one + "' wins!";
      endGame();

    };
    });
};

function endGame() {

}

function resetGame() {
  winLine.innerText = '';
  squares.forEach(function(square) {
    square.innerText = ''
  })

};

// reset button
var reset = document.querySelector('.reset')

reset.addEventListener('click', function(){
  resetGame();
})

});
