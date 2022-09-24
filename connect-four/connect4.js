/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for (let i = 0; i < HEIGHT; i++) {
    let rowArr = []
    for (let j = 0; j < WIDTH; j++) {
      rowArr.push(undefined)
    }
    board.push(rowArr)
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.querySelector('#board')

  // TODO: add comment for this code
  //create the table header to be clicked on
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  //add click listener
  top.addEventListener("click", handleClick);
  //populate the table header
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  //add the table header to the html doc
  htmlBoard.append(top);

  // TODO: add comment for this code
  //populate the game table
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0

  if (board[0][x] > 0) return null

  if (board[HEIGHT - 1][x] === undefined) return HEIGHT - 1

  for (let row = 0; row < HEIGHT; row++) {
    if (board[row][x] === undefined) {

    }
    else {
      return row - 1
    }
  }


}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  const token = document.createElement('div')
  const curTD = document.getElementById(`${y}-${x}`)
  token.classList.add('piece')
  if (currPlayer === 1) {
    token.classList.add('red')
  }
  else {
    token.classList.add('blue')
  }
  curTD.append(token)
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // console.log(x + " " + y)

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  board[y][x] = currPlayer


  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (board.every(row => row.every(elem => elem > 0))) {
    return endGame("It's a Tie")
  }

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  if (currPlayer === 1) {
    currPlayer = 2
  }
  else {
    currPlayer = 1
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      //goes through every x and y coordinate
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];//checks horizontally
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];//checks vertically
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];//checks diagonally downward
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];//checks diagonally upward

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}
//could be implemented more effeciently if it checked from the last position rather than iterating through each cell on every event trigger
/*
let horizR = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];//checks horizontally to the right
let vertD = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];//checks vertically down
let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];//checks diagonally downward to the right
let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];//checks diagonally downward to the left
let horizL = [[y, x], [y, x - 1], [y, x - 2], [y, x - 3]];//checks horizontally to the left
let vertU = [[y, x], [y - 1, x], [y - 2, x], [y - 3, x]];//checks vertically upward
let diagUR = [[y, x], [y - 1, x + 1], [y - 2, x + 2], [y - 3, x + 3]];//checks diagonally upward to the right
let diagUL = [[y, x], [y - 1, x - 1], [y - 2, x - 2], [y - 3, x - 3]];//checks diagonally upward to the left

if (_win(horizR) || _win(vertU) || _win(diagDR) || _win(diagDL) || _win(horizL) || _win(vertD) || _win(diagUR) || _win(diagUL)) {
  return true;
}
*/
//could implement turn count var to track when a win is possible and check for win from there
makeBoard();
makeHtmlBoard();
