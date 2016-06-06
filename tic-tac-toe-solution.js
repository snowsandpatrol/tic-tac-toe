
var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
//
function restart () {

player = 1
grid = [null, null, null, null, null, null, null, null, null]

}

//CHECK WHETHER BOX IS FILLED
function playTurn (index) {
if(grid[index] || isGameOver()) {
  return false
  console.log("grid: " + grid.join("-"))
} else {
    console.log("player: " + player)
      grid[index]=player
        if (player ===1) player = 2
        else player = 1
        console.log("grid: " + grid.join("-"))
        return true
  }
}

function isGameOver(){

  var winner =whoWon()
  if (winner===1 || winner===2|| winner===3) return true
  else return false
}

// It should return a true or false if the game is over.

function whoWon() {

  //whoWon()
  // It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
  // console.log(grid.join + "-")

// return 0

  //NOT YET FINISHED
// console.log(player)
  //TOP ROW
  if (grid[0] ===2 && grid[1]===2 && grid[2] ===2) return 2;
  if (grid[0] ===1 && grid[1]===1 && grid[2] ===1) return 1;


  //MIDDLE ROW
  if (grid[3] ===2 && grid[4]===2 && grid[5] ===2) return 2;
  if (grid[3] ===1 && grid[4]===1 && grid[5] ===1) return 1;

  //BOTTOM ROW
  if (grid[6] ===1 && grid[7]===1 && grid[8] ===1) return 1;
  if (grid[6] ===2 && grid[7]===2 && grid[8] ===2) return 2;

  //LEFT COLUMN
  if (grid[0] ===1 && grid[3]===1 && grid[6] ===1) return 1;
  if (grid[0] ===2 && grid[3]===2 && grid[6] ===2) return 2;

  //MIDDLE COLUMN
  if (grid[1] ===1 && grid[4]===1 && grid[7] ===1) return 1;
  if (grid[1] ===2 && grid[4]===2 && grid[7] ===2) return 2;

  //RIGHT COLUMN
  if (grid[2] ===1 && grid[5]===1 && grid[8] ===1) return 1;
  if (grid[2] ===2 && grid[5]===2 && grid[8] ===2) return 2;

  //LEFT DIAGONAL
  if (grid[0] ===1 && grid[4]===1 && grid[8] ===1) return 1;
  if (grid[0] ===2 && grid[4]===2 && grid[8] ===2) return 2;

  //RIGHT DIAGONAL
  if (grid[2] ===1 && grid[4]===1 && grid[6] ===1) return 1;
  if (grid[2] ===2 && grid[4]===2 && grid[6] ===2) return 2;

    if (grid[0] ===null || grid[1] ===null || grid[2] ===null || grid[3] ===null || grid[4] ===null || grid[5] ===null || grid[6] ===null|| grid[7] ===null|| grid[8] ===null) return 0;

    else return 3

}
