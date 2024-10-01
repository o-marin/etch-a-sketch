/**
 * @param {Node} parentNode Node where the div is going to be appended.
 * @param {int} containerDimension Description.
 * @param {int} gridSize
 */
function addDiv(parentNode, containerDimension, gridSize) {
    let opacity = 0.0;
  let div = document.createElement("div");
  //let paragraph = document.createElement('p');
  parentNode.appendChild(div);
  div.style.border = "2px solid black";
  div.style.width = `${(containerDimension/gridSize)-4}px`;
  div.style.height = `${(containerDimension/gridSize)-4}px`;
  div.addEventListener("mouseover", (event) => {
    opacity += 0.1;
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    //background-color: rgb(red, green, blue);
    event.target.style.backgroundColor = `rgb(${red}, ${green},${blue}, ${opacity})`;
  });
}

function createGrid() {
  let gridSize = Number(
    prompt("Indicate the dimensions of the grid, maximum of 10")
  );
  while (!Number.isInteger(gridSize) || gridSize > 10) {
    gridSize = Number(prompt("Input must be a valid number, maximum 10"));
  }

  const divs = document.body.getElementsByTagName("div");
  
  if (divs.length === 0) {
    document.body.appendChild(container);
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = `${containerDimension}px`;
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        addDiv(container,containerDimension,gridSize);
      }
    }
  }else{
    container.innerHTML = '';
    document.body.appendChild(container);
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = `${containerDimension}px`;
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        addDiv(container,containerDimension,gridSize);
      }
    }
  }
}

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center"
document.body.style.alignItems = "center";
document.body.style.gap = "2rem"

let containerDimension = 500;

let container = document.createElement("div");
let newContainer = document.createElement("div")

let button = document.createElement("button");
button.textContent = "New Grid";
document.body.appendChild(button);
button.addEventListener("click", createGrid);


/**
 * Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
 * 
 * Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. 
 * The goal is to achieve a fully black (or completely colored) square in only ten interactions.  
 * 
 * */



/** just an idea, not yet implemented
 * to win the game you have to match all the tiles with a shade of the color you choose, try 
 * 
 * 
 * 
 */