
let grid = document.querySelector('.grid-container');

grid.style.boxSizing = 'border-box';
grid.style.width = '100%';
grid.style.height = '100%';

for (let i = 0; i < 16; i++)
{
  for (let j = 0; j < 16; j++)
  { 
    let divBox = document.createElement('div');
    divBox.style.border = '3px solid #937bb7';
    grid.appendChild(divBox);
  }
}

grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(16, 50px)';
grid.style.gridTemplateRows ='repeat(16, 50px)';

