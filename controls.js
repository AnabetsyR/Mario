$(document).keydown(function(e){
  if(e.keyCode == 37){
    player.velX = -5;
    player.dir = "left";
  }
  if (e.keyCode == 38)player.velY=-5;
   
  if (e.keyCode == 39) {
    player.velX=5;
    player.dir = "right";
  }
  if(e.keyCode == 40) player.velY=5;                    
});

$(document).keyup(function(e){
  if(e.keyCode == 37) player.velX= 0;
  if (e.keyCode == 38) player.velY=0;
  if (e.keyCode == 39) player.velX=0;
  if(e.keyCode == 40) player.velY=0;                    
});