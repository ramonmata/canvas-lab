var particle = {
    position: null,
    velocity: null,
    gravity: null,
    isVisible: null,
    mass: 1,

    create: function(x, y, speed, direction, grav, visibility){
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav||0);
        obj.isVisible = visibility || false;
        return obj;
    },

    update: function() {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    },

    accelerate: function(accel) {
        // avoid adding when velocity is very small
        if (this.velocity<=0.01 || this.velocity>=-0.01) {
            this.velocity = 0;
        } else {
            this.velocity.addTo(accel);
        }
    },

    angleTo: function(particle) {
        return Math.atan2(
            particle.position.getY() - this.position.getY(),
            particle.position.getX() - this.position.getX(),
        );
    },

    distanceTo: function(particle) {
        var dx = particle.position.getX() - this.position.getX(),
            dy = particle.position.getY() - this.position.getY();
        return Math.sqrt(dx*dx + dy*dy);
    },

    gravitateTo: function(particle) {
        var gravityVector = vector.create(0, 0);
        dist = this.distanceTo(particle);

        gravityVector.setLength(particle.mass * this.mass / (dist*dist) );
        gravityVector.setAngle(this.angleTo(particle));

        this.velocity.addTo(gravityVector);
    },

    setVisible : function(value) {
        this.isVisible = value;
    }

};