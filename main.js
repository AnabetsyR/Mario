var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var background= document.getElementById("background")
c.width = window.innerWidth;
c.height = window.innerHeight*0.9;


function animate(){
  ctx.fillStyle = "#000000";
  ctx.drawImage(background, 0, 0, c.width, c.height);
  player.update();
  player.render();
  window.requestAnimationFrame(animate);
}
animate();

