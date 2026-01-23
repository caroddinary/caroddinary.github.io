class Pelota {
  constructor() {
    this.diam = random(10, 20);
    this.rad = this.diam / 2;

    this.posx = random(this.rad, width - this.rad);
    this.posy = random(this.rad, height - this.rad);

    this.velx = random(-0.1, 0.1);
    this.vely = random(-0.4, 0.4);

    this.col = color(255, 255, 255, 40);
  }

  actualizar() {
    if (this.posx > width - this.rad || this.posx < this.rad) {
      this.velx *= -1;
    }

    if (this.posy > height - this.rad || this.posy < this.rad) {
      this.vely *= -1;
    }

    this.posx += this.velx;
    this.posy += this.vely;
  }

  visualizar() {
    noFill();
    stroke(this.col);
    strokeWeight(1);
    circle(this.posx, this.posy, this.diam);
  }
}

