window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


  // adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid
  context.translate(0, height / 2);
  // adds a scaling transformation to the canvas units by x horizontally and by y vertically 
  context.scale(1, -1);

  for (var angle = 0; angle <= Math.PI * 2; angle += 0.01) {
    var x = angle * 200,
      y = Math.sin(angle) * 200;

    context.fillRect(x, y, 5, 5);
  }

}