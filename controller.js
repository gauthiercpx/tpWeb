
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => { this.currEditingMode = editingMode.rect; };
	document.getElementById('butLine').onclick = (_) => { this.currEditingMode = editingMode.line; };
	document.getElementById('spinnerWidth').onchange = (e) => { this.currLineWidth = e.target.value; };
	document.getElementById('colour').onchange = (e) => { this.currColour = e.target.value; };


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, 0, 0, this.currLineWidth, this.currColour);
		}
		else if (this.currEditingMode == editingMode.line) {
			this.currentShape = new Line(dnd.initialX, dnd.initialY, dnd.initialX, dnd.initialY, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx);
		if (this.currentShape) this.currentShape.paint(ctx, canvas);
	}.bind(this);
	this.onInteractionUpdate = function (dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape.w = dnd.finalX - dnd.initialX;
			this.currentShape.h = dnd.finalY - dnd.initialY;
		}
		else if (this.currEditingMode == editingMode.line) {
			this.currentShape.x2 = dnd.finalX;
			this.currentShape.y2 = dnd.finalY;
		}
		drawing.paint(ctx, canvas);
		if (this.currentShape) this.currentShape.paint(ctx, canvas);
	}.bind(this);
	this.onInteractionEnd = function (dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape.w = dnd.finalX - dnd.initialX;
			this.currentShape.h = dnd.finalY - dnd.initialY;
		}
		else if (this.currEditingMode == editingMode.line) {
			this.currentShape.x2 = dnd.finalX;
			this.currentShape.y2 = dnd.finalY;
		}
		drawing.shapes.push(this.currentShape);
		drawing.paint(ctx, canvas);
		this.currentShape = 0;
		console.log(drawing);
	}.bind(this);

};


