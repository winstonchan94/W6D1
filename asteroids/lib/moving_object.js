class MovingObject {
  constructor (option) {
    this.pos = option["pos"];
    this.vel = option["vel"];
    this.radius = option["radius"];
    this.color = option["color"];
  }
  draw (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  }
  move () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }
}

module.exports = MovingObject;
