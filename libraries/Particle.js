class Particle {
  constructor(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();

    this.diameter = 20;
    this.radius = this.diameter / 2;
    this.color = "white";
  }

  detectBoxCollision(boxX, boxY, boxW, boxH) {
    const hitTop = this.pos.y - this.radius < boxY;
    const hitBot = this.pos.y + this.radius > boxY + boxH;
    const hitLeft = this.pos.x - this.radius < boxX;
    const hitRight = this.pos.x + this.radius > boxX + boxW;

    const hitNothing = !hitTop && !hitBot && !hitLeft && !hitRight;

    return hitNothing ? undefined : hitLeft || hitRight ? "x" : "y";
  }

  handleCollisions() {
    const walls = [0, 0, width, height];
    const boxes = [walls];

    let collision;

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];

      collision = this.detectBoxCollision(...box);
      if (collision) break;
    }

    if (collision) this.bounce(collision);
  }

  bounce(dir) {
    this.vel[dir] *= -1;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.handleCollisions();
    this.draw();
  }

  draw() {
    push();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.diameter);
    pop();
  }
}
