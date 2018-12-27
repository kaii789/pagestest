export class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        brush = canvas.brush;
        brush.beginPath();
        brush.arc(x, y, radius, 0, Math.PI * 2, true);
        brush.stroke();
    }
}
