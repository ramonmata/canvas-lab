window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    sun = particle.create(width/2, height/2, 0, 0),
    planet = particle.create(width/2 + 200, height/2, 10, -Math.PI / 2);
    planet2 = particle.create(width/2 + 100, height/2, 10, -Math.PI / 2);

  sun.mass = 20000;
  planet2.mass = 0.5;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    planet.gravitateTo(sun);
    planet.update();

    planet2.gravitateTo(sun);
    planet2.update();

    drawPlanet("#ffff00", 20, sun);
    drawPlanet("#0000ff", 5, planet);
    drawPlanet("#ff0000", 5, planet2);

    requestAnimationFrame(update);
  }

  function drawPlanet(color, radius, particle) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(
      particle.position.getX(),
      particle.position.getY(),
      radius,
      0,
      -Math.PI * 2, 
      false
    );
    context.fill();
  }
}