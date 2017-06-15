window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    arrowX = width/2,
    arrowY = height/2,
    xAngle = 0,
    yAngle = 0,
    xRadius = 100,
    yRadius = 200,
    xSpeed = 0.01,
    ySpeed = 0.012,
    dx, dy, angle = 0,
    x, y;

  render();

  function render (){
    context.clearRect(0,0, width, height);

    context.save();
    
    x = arrowX + Math.cos(xAngle) * xRadius;
    y = arrowY + Math.cos(yAngle) * yRadius;
    angle = Math.atan2(dy -y, dx -x);
    xAngle += xSpeed;
    yAngle += ySpeed;

    context.translate(x, y);
    context.rotate(angle);
    drawArrow();
    context.restore();
    requestAnimationFrame(render);
  }

  function drawArrow(){
    context.beginPath();
    context.moveTo(10,0);
    context.lineTo(-10,0);
    context.moveTo(10,0);
    context.lineTo(5, -5);
    context.moveTo(10,0);
    context.lineTo(5, 5);
    context.stroke();
  }
  
  document.body.addEventListener("mousemove", function(event){
    dx = event.clientX;
    dy = event.clientY;
  });

}