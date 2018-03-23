function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 20;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.strokeRect(this.x, this.y, this.w, this.h);
}

Sprite.prototype.mover = function (dt) {
    this.vx = this.vx + this.ax*dt;
    this.vy = this.vy + this.ay*dt;

    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;
}

Sprite.prototype.perseguir = function (alvo){
  this.ax = 0.5*(alvo.x - this.x) - 0.9*this.vx;
  this.ay = 0.5*(alvo.y - this.y) - 0.9*this.vy;
}
