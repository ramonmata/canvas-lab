window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  context.fillStyle = 'black';
  context.fillRect(width/2 - 100, height/2 - 100, 100, 100);

}