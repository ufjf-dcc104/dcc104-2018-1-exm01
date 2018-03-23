function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 20;
  this.vx = 0;
  this.vy = 0;

  this.desenhar = function (ctx) {
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }

  this.mover = function (dt) {
      this.x = this.x + this.vx*dt;
      this.y = this.y + this.vy*dt;
  }
}
