
console.log("ready!");

$(document).ready(function() {

  $('.clicker').click(function () {
   console.log("restart");
   restart()
   $('.grid').html(" ");
 })

$('.grid').click(function () {
   console.log("click");
   var idNumber = parseInt(this.id);
   var currentPlayer = player;
   if (playTurn(idNumber)) {
   $(this).text(currentPlayer);
 }

winner =whoWon()
if (winner ===1) {
  console.log("player 1 wins")
  alert(("player 1 wins"))
  };
if (winner ===2) {
  console.log("player 2 wins")
  alert(("player 2 wins"))
  };
if (winner ===3) {
  console.log("its a tie")
  alert(("its a tie"))
  };

if (isGameOver()=== true ) {
  console.log("there is a winner")
  restart()
  window.location.reload() }

  });
  });
