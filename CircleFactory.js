import Circle from "./Circle.js"; 

export class CircleFactory {
    constructor(numCicles) {
        this.numCicles = numCicles;
    }

    makeCircles() {
        cirles = new Array();

        for (i; i < numCicles; i++) {
            x = Math.random() * window.innerWidth;
            y = Math.random() * window.innerHeight;
            radius = Math.random * 100;
            circle = new Circle(x, y, radius);
            cirles.push(circle)
        }


        
    }
} 