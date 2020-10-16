const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0,
    lastY = 0;

function draw(e) {
  if(!isDrawing) return;
  console.log(e);

  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.lineWidth = 50;

  [lastX,lastY] = [e.offsetX, e.offsetY];

}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {isDrawing = true;
lastX = e.offsetX;
lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
