window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var centerX = width / 2,
    centerY = height / 2,
    offset = height * .4,
    baseRadius = 50,
    baseRadiusOffset = 50,
    baseAlpha = 1,
    baseAlphaOffset = 0.5,
    speed = 0.06,
    angle = 0;

  render();

  function render() {
    var y = centerY + Math.sin(angle) * offset;
    var radius = baseRadius + (Math.cos(angle) * baseRadiusOffset);
    var alpha = baseAlpha + (Math.cos(angle) * baseAlphaOffset);

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgba(0,0,0,' + alpha + ')';
    context.beginPath();
    context.arc(centerX, y, radius, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  }

}