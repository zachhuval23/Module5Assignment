// Two variables which reference elements in my HTML document.
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn'); 

// Use these variables to to keep track of the color of the cursosr and whether the user is currently 'drawing'.
let currentColor = 'black';
let isDrawing = true; 

// Function to create grid. Takes a single 'size' parameter and sets CSS properties of my containers. Use the for loop to create size * the number of div elements with the class 'box' and appends them to the 'container' element.
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add ('box');
    container.appendChild(box);
  }
}

// Selects all the 'div' elements with the class 'box' in the container element and sets their background color property to white to 'reset' the grid.
function clearGrid () {
  const boxes = container.querySelectorAll('.box');
  boxes.forEach(box => box.style.backgroundColor = 'white');
}

// Called whenever the user hovers their mouse over a box and checks if isDrawing is true.
function handleBoxHover(e){
  if (isDrawing) {
    e.target.style.backgroundColor = currentColor;
  }
}

// Called whenever the user presses the mouse down on a box and sets isDrawing to true.
function handleMouseDown(e) {
  isDrawing = true;
  handleBoxHover(e);
}

// Attached to the container element and is called whenever the user releases the mouse button.
function handleMouseUp(){
  isDrawing = false;
}

// Adds an event listener to the resetBtn element. When the user clicks the button the code first calls the clearGrid function to clear the current grid and then prompts the user to enter their own grid size between 1-100.
resetBtn.addEventListener('click', () => {
  clearGrid();
  const size = parseInt(prompt('Enter grid size (1-100):'));
  createGrid(size);
});

// Sets intial size to 16 and calls createGrid to initialize the grid.
const initialSize = 16;
createGrid(initialSize);
container.addEventListener('movemove', handleBoxHover);
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);

// Selects all input elements with the type attribute set to radio and assigns them to the colorInputs variable using querySelectorAll. It then attaches an even listener to each of these elements which listens for a change even. When that occurs the currentColor variable is set to the value attribute of the radio button that triggered the event. This should allow the user to change the color of the mouse cursor when drawing on the grid.
const colorInputs = document.querySelectorAll
('input[type="radio"]');
colorInputs.forEach(input => {
  input.addEventListener('change', () =>{
    currentColor = input.value;
  });
});
