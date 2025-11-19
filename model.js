function Drawing() {
    this.shapes = new Array();
    function addShape(s) {
        this.shapes.push(s);
    }
}



function Shape(x, y, lw, color) {
    this.x = x;
    this.y = y;
    this.lw = lw;
    this.color = color;
}

function Rectangle(x, y, h, w, lw, color) {
    Shape.call(this, x, y, lw, color);
    this.h = h;
    this.w = w;
}
Rectangle.prototype = new Shape();

function Line(x, y, x2, y2, lw, color) {
    Shape.call(this, x, y, lw, color);
    this.x2 = x2;
    this.y2 = y2;
}
Line.prototype = new Shape();

function Circle(x, y, r, lw, color) {
    Shape.call(this, x, y, lw, color);
    this.r = r;
}
Circle.prototype = new Shape();

