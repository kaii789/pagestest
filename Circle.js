//______________________________________________________________
// Model

class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        brush.beginPath();
        brush.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        brush.fillStyle = this.color;
        brush.stroke();
        brush.fill();
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setXVelocity(dx) {
        this.dx = dx;
    }

    setYVelocity(dy) {
        this.dy = dy;
    }
}


export class CircleFactory {
    static makeCircles(numCircles) {
        var circles = new Array();

        for (var i = 0; i < numCircles; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            var dx = (Math.random() - 0.5) * 4;
            var dy = (Math.random() - 0.5) * 4;
            var radius = Math.random() * 100;
            var color = colors[Math.floor(Math.random() * colors.length)];
            var circle = new Circle(x, y, dx, dy, radius, color);
            circles.push(circle)

        }

        return circles;
    }
}
