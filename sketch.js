const BG_COLOR = 25;
const TESTING = true;

let ball;

function setup() {
  const testMode = typeof TESTING !== "undefined" && TESTING;

  createCanvas(windowWidth, testMode ? (windowWidth * 9) / 48 : windowHeight);

  ball = new Ball(10, 20);
  if (testMode) ball.vel = createVector(5, 5); // For initial testing
}

function draw() {
  background(BG_COLOR);

  ball.update();
}
