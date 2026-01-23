const NP = 200;
let pelotas = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');

  for (let i = 0; i < NP; i++) {
    pelotas.push(new Pelota());
  }
}

function draw() {
  clear();

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].actualizar();
    pelotas[i].visualizar();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
