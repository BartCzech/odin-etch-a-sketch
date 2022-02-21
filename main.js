const bigContainer = document.createElement('div');
bigContainer.className = 'bigContainer';
document.body.appendChild(bigContainer);

let columns = [];
let squares = [];
let size = 16;

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        columns[i] = document.createElement('div');
        bigContainer.appendChild(columns[i]);
        columns[i].className = 'columns';
        for(let j = 0; j < size; j++) {
            squares[i*size+j] = document.createElement('div');
            columns[i].appendChild(squares[i*size+j]);
            squares[i*size+j].className = 'squares';
            squares[i*size+j].addEventListener("mouseover", () => { //coloring squares
                squares[i*size+j].style.backgroundColor = "black";
                squares[i*size+j].style.opacity = 1;
            });
        }
    }
}

function destroyGrid() {
    let elements = document.querySelectorAll('.columns');
    elements.forEach((div) => div.remove());
}

function reset() {
    destroyGrid();
    size = prompt("Choose the size of the grid");
    if (size > 1 && size < 101) {
        createGrid(size);
    } else {
        size = prompt("Size cannot be smaller than 2 and bigger than 100. Choose a new size!");
    }
}

createGrid(size);
