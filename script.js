let content = document.querySelector('.content');
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`
    let size2 = size * size;

    for (let i = 0; i < size2; i++) {
       let square = document.createElement('div')
       square.style.backgroundColor = 'blue'
       board.appendChild(square)
    }
}
populateBoard(16);

function changeSize(input) {
    let alert = document.querySelector('.board-size')
    if (input >= 1 && input <= 100) {
        populateBoard(input);
        alert.textContent = `Board size: ${input}x${input}`
    }
    else {
        alert.textContent = "too many squares";
    }
}