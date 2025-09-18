function Drawing() {
    this.shapes = new Array();
    function addShape(s) {
        this.shapes.push(s);
    }
}



function Shape(lw, color) {

}

function Rectangle(x, y, w, h, lw, color) {
    Shape.call(this, lw, color);
}
Rectangle.prototype = new Shape();

function Line(x1, y1, x2, y2, lw, color) {
    Shape.call(this, lw, color);
}
Line.prototype = new Shape();
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
