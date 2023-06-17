let p;

const BG_COLOR = 25;

function setup() {
  const height = (windowWidth / 48) * 9;
  createCanvas(windowWidth, height);

  p = new Particle(10, 20);
  p.vel = createVector(5, 5);
}

function draw() {
  background(BG_COLOR);

  p.update();
}
