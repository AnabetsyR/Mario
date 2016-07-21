var enemy ={
  x: 100,
  y: 100,
  velX: 0,
  velY: 0,
  update: function(){
    if 
    if(this.x < player.x){
      this.x = this.x +3;
  }
    if(this.x > player.x){
      this.x = this.x -3;
  }
    if(this.y < player.y){
      this.y = this.y + 3;
    }
    if(this.y > player.y){
      this.y = this.y -3;
    }
    
  
},
    render: function(){
    ctx.fillStyle= "#FFFFFF";
    ctx.fillRect(this.x, this.y, 50, 50);
  
}
};