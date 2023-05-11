const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');

let currentColor = 'black';
let isDrawing = true;

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add ('box');
    container.appendChild(box);
  }
}

function clearGrid () {
  const boxes = container.querySelectorAll('.box');
  boxes.forEach(box => box.style.backgroundColor = 'white');
}

function handleBoxHover(e){
  if (isDrawing) {
    e.target.style.backgroundColor = currentColor;
  }
}

function handleMouseDown(e) {
  isDrawing = true;
  handleBoxHover(e);
}

function handleMouseUp(){
  isDrawing = false;
}

resetBtn.addEventListener('click', () => {
  clearGrid();
  const size = parseInt(prompt('Enter grid size (1-100):'));
  createGrid(size);
});

const initialSize = 16;
createGrid(initialSize);
container.addEventListener('movemove', handleBoxHover);
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);

const colorInputs = document.querySelectorAll
('input[type="radio"]');
colorInputs.forEach(input => {
  input.addEventListener('change', () =>{
    currentColor = input.value;
  });
});
