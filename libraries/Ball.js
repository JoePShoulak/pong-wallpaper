class Ball {
  constructor(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();

    this.diameter = 20;
    this.radius = this.diameter / 2;
    this.color = "white";

    this.canvas = new Box(0, 0, width, height);
  }

  detectBoxCollision(box) {
    const hitTop = this.pos.y - this.radius < box.pos.y;
    const hitBot = this.pos.y + this.radius > box.pos.y + box.size.h;
    const hitLeft = this.pos.x - this.radius < box.pos.x;
    const hitRight = this.pos.x + this.radius > box.pos.x + box.size.w;

    const hitNothing = !(hitTop || hitBot || hitLeft || hitRight);

    return hitNothing ? undefined : hitLeft || hitRight ? "x" : "y";
  }

  handleCollisions() {
    const boxes = [this.canvas];

    // const collision = boxes.firstReturn(this.detectBoxCollision); TODO: Figure out why this doesn't work
    const collision = boxes.firstReturn(box => this.detectBoxCollision(box));

    if (collision) this.bounce(collision);
  }

  updateKinematics() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  bounce(dir) {
    this.vel[dir] *= -1;
  }

  update() {
    this.updateKinematics();
    this.handleCollisions();

    this.draw();
  }

  draw() {
    tempStyle(() => {
      fill(this.color);
      circle(this.pos.x, this.pos.y, this.diameter);
    });
  }
}
