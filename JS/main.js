/*----- constants -----*/ 
const COLORS = {
    "0": 'white',
    '1': 'purple',
    '-1': 'lime',

};

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section.markers')
    .addEventListener('click', handleClick);



/*----- functions -----*/

function init() {
    board = [
        [0, 0, 0, 0, 0, 0], //column 1 idx 0
        [0, 0, 0, 0, 0, 0], //column 2 idx 1
        [0, 0, 0, 0, 0, 0], //column 3 idx 2
        [0, 0, 0, 0, 0, 0], //column 4 idx 3
        [0, 0, 0, 0, 0, 0], //column 5 idx 4
        [0, 0, 0, 0, 0, 0], //column 6 idx 5
        [0, 0, 0, 0, 0, 0], //column 7 idx 6
    ];
    turn = 1;
    winner = null; 
    render()      // 1, -1 null (no winner), 'T' (tie)
};
function render() {
    // render the board
    board.forEach(function(colArr, colIdx) {
        // hide/show the column's marker depending if there are 0's or not
        let marker = document.getElementById(`col${colIdx}`)
        // <conditional expression ? <truthy thing to return> : <falsey thing to return>;
        // this is a ternary expression that replaces the if/else statement below
        marker.style.visibility = colArr.indexOf(0) === -1 ? 'hidden' : 'visible';
    //     if ( colArr.indexOf(0) === -1) {
    //     marker.style.visibility = 'hidden';
    // } else {
    //     marker.style.visibility = 'visible';

    //     }
        colArr.forEach(function(cell, rowIdx) {
            let div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = COLORS[cell];
        })
    });
    // render the 'msg'
    if ( winner ) {

    } else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s Turn `;

    }
}
function handleClick(evt) {
    // get index of columns marker clicked 
    let idx = parseInt(evt.target.id.replace('col', ''));
    // make sure MARKER was clicked
    if (isNaN(idx) || winner) return;
    // obtain the actual column array in board array
    let colArr = board[idx];
    // get the index of the first 0nin the col array
    let rowIdx = colArr.indexOf(0);
    // if the col is full, there are no zeroes, therefore 
    // indexOf returns -1
    // do nothing if no zeroes available (col full)
    if (rowIdx === -1) return;
    colArr[rowIdx] = turn;
    turn *= -1;
    // update the Winner
    winner = getWinner();
    render();

}
    function getWinner() {
    // this will returm the winner, 'T' or null
    
    }

init();