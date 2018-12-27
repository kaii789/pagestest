import CircleFactory from "Circle";
var colors = ["#96CEB4", "#FFEEAD", "#FF6F69", "#FFCC5C", "#AAD8B0"];


// View
var canvas = $("canvas").get(0);
var brush = canvas.getContext("2d");

// correct the orientation
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// ___________________________________________________________
// Controller

class CircleController {
    static moveCircles() {
        for (var index in circles) {
            var circle = circles[index];
            var newX = CircleController._getNewPosition(circle)[0];
            var newY = CircleController._getNewPosition(circle)[1];
            circle.setPosition(newX, newY);
            // circle.setPosition(circle.getPosition[0] + 1, circle.getPosition[0]);
        }
    }

    static drawCircles() {
        for (var index in circles) { // notice how the for each loop gives us the index, not the circle
            circles[index].draw();
        }
    }

    static _getNewPosition(circle) {
        var newPosition = new Array();
        var newX = circle.x + circle.dx
        var newY = circle.y + circle.dy;
        newPosition.push(newX);
        newPosition.push(newY);

        var xOutOfBounds = (newX < circle.radius) || (newX > window.innerWidth - circle.radius);
        var yOutOfBounds = (newY < circle.radius) || (newY > window.innerHeight - circle.radius);

        if (xOutOfBounds) {
            circle.setXVelocity(circle.dx * -1);
        }

        if (yOutOfBounds) {
            circle.setYVelocity(circle.dy * -1);
        }

        return newPosition;
    }
}

// make and animate the circles
circles = CircleFactory.makeCircles(100);
animate();

function animate() {
    requestAnimationFrame(animate);
    brush.clearRect(0, 0, window.innerWidth, window.innerHeight); // clears the canvas in prep for new frame
    CircleController.moveCircles();
    CircleController.drawCircles();
}

// add hover listener to increase size of circles when hover

window.addEventListener("mousemove", function(event) {
    for (var index in circles) {
        var circle = circles[index];
        circle.setRadius(circle.radius + 1);
    }
})

window.addEventListener("resize", function() {
    // correct the orientation
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})














/*
#TODO
-make circle class, should have draw method
-circle factory >> generate circle or array of circles?
*/