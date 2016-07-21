var player={
  x : 100,
  y : 410,
  velX : 0,
  velY : 0,
  sprites : [document.getElementById("playerf1"),
             document.getElementById("playerf2"),
             document.getElementById("playerf3")
  ],
  ticks: 0,
  spriteNum: 0,
  dir: "right",
  update: function(){
    this.ticks++;
    this.x= this.x + this.velX;
    this.y= this.y + this.velY;
    if(this.velX != 0 || this.velY != 0)
      if(this.ticks % 20 === 0)
        this.spriteNum = this.spriteNum +1;
    if(this.spriteNum >2) this.spriteNum = 0;
  },
  render: function(){
    //ctx.fillRect(this.x, this.y, 300, 85);
    if (this.dir == "left"){
      flipCtx(ctx, this);
    }
    ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y);
    if(this.dir == "left"){
      ctx.restore();
    }
  }
};
function flipCtx(ctx, player){
  ctx.save();
  ctx.translate(player.x + 50,0);//50 is half of player's width
  ctx.scale(-1,1);
  ctx.translate(-player.x -50,0);
  //ready to draw flipped!
}

function restoreCtx(ctx){
  ctx.restore();
  
}