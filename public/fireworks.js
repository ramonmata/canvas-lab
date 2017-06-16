window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    particles = null,
    numParticles = 100;

  initParticles();
  update();

  function initParticles(){
    particles = [];
    for (var i = 0; i < numParticles; i++) {
      particles.push(particle.create(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1, true));
    }
  }

  function update() {
    context.clearRect(0, 0, width, height);
    var visibleParticles = numParticles;

    for (var i = 0; i < numParticles; i++) {
      var p = particles[i];
      if (p.isVisible) {
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 2, 0, Math.PI * 2, false);
        context.fill();
      }
      // Calculate if particle is out of screen
      if (p.position.getX() < 0 || p.position.getX() > width || p.position.getY() > height) {
        p.setVisible(false);
        visibleParticles--;
      }
    }

    if (visibleParticles) {
      requestAnimationFrame(update);
    } else {
      console.log('No visible particles left! restarting');
      initParticles();
      update();
    }
  }

}