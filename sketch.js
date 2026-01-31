const NP = 200;
let pelotas = [];

let paleta = [];
let colorActual;
let colorSiguiente;
let t = 0;
let velocidadTransicion = 0.015;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');

  paleta = [
    color(40, 30, 90), 
    color(65, 20, 120)
  ];

  colorActual = random(paleta);
  colorSiguiente = random(paleta);

  noCursor(); 

  for (let i = 0; i < NP; i++) {
    pelotas.push(new Pelota());
  }
}

function draw() {
  let fondo = lerpColor(colorActual, colorSiguiente, t);
  background(fondo);

  t += velocidadTransicion;

  if (t >= 1) {
    t = 0;
    colorActual = colorSiguiente;
    colorSiguiente = random(paleta);
  }

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].actualizar();
    pelotas[i].visualizar();
  }

  dibujarCursor(mouseX, mouseY);
}

function dibujarCursor(x, y) {
  push();
  noStroke();

  fill(255, 10);
  ellipse(x, y, 60, 60);

  fill(255, 18);
  ellipse(x, y, 45, 45);

  fill(255, 25);
  ellipse(x, y, 34, 34);

  stroke(255, 180);
  strokeWeight(1);
  fill(255, 35);
  ellipse(x, y, 26, 26);

  noStroke();
  fill(255, 140);
  ellipse(x, y, 10, 10);

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
