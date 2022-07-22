let content = document.querySelector('.content');
let color = 'black'
let mouseDown = false
let colorButton = document.querySelector('.color-button');
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`
    let size2 = size * size;

    for (let i = 0; i < size2; i++) {
       let square = document.createElement('div')
       square.addEventListener('mouseover', colorSquare);
       square.addEventListener('mousedown', colorSquare);
       square.style.backgroundColor = 'white'
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
        alert.textContent = "Board only accepts values between 1 and 100";
    }
}

function colorSquare() {
    if ('mouseover' && !mouseDown) return
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
    
}

function changeColor(choice) {
    color = choice;
    colorButton.style.backgroundColor = choice;
}
function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
}
