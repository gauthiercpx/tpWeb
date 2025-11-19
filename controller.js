
var editingMode = { rect: 0, line: 1, circle: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => { this.currEditingMode = editingMode.rect; };
	document.getElementById('butLine').onclick = (_) => { this.currEditingMode = editingMode.line; };
	document.getElementById('butCircle').onclick = (_) => { this.currEditingMode = editingMode.circle; };

	document.getElementById('spinnerWidth').onchange = (e) => { this.currLineWidth = e.target.value; };
	document.getElementById('colour').onchange = (e) => { this.currColour = e.target.value; };

	// Bouton qui efface toutes les formes (clear)
	var clearBtn = document.getElementById('clearShapes');
	if (clearBtn) {
		clearBtn.onclick = function () {
			// vider le tableau des formes
			drawing.shapes.length = 0;
			// redessiner et mettre à jour la liste
			drawing.paint(ctx, canvas);
			if (typeof updateShapeList === 'function') updateShapeList(drawing);
		};
	}


	new DnD(canvas, this);

	// Écouteur délégué pour gérer la suppression via le bouton dans la liste
	var shapeListEl = document.getElementById('shapeList');
	if (shapeListEl) {
		shapeListEl.addEventListener('click', function (evt) {
			var target = evt.target;
			// remonter jusqu'au bouton si on a cliqué sur l'icône
			while (target && target !== shapeListEl && target.tagName.toLowerCase() !== 'button') {
				target = target.parentNode;
			}
			if (!target || target === shapeListEl) return;
			var idx = target.getAttribute && target.getAttribute('data-index');
			if (!idx) return;
			var i = parseInt(idx, 10);
			if (isNaN(i)) return;
			// suppression de la forme correspondante
			if (i >= 0 && i < drawing.shapes.length) {
				drawing.shapes.splice(i, 1);
				drawing.paint(ctx, canvas);
				if (typeof updateShapeList === 'function') updateShapeList(drawing);
			}
		});
	}

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, 0, 0, this.currLineWidth, this.currColour);
		}
		else if (this.currEditingMode == editingMode.line) {
			this.currentShape = new Line(dnd.initialX, dnd.initialY, dnd.initialX, dnd.initialY, this.currLineWidth, this.currColour);
		}
		else if (this.currEditingMode == editingMode.circle) {
			this.currentShape = new Circle(dnd.initialX, dnd.initialY, 0, this.currLineWidth, this.currColour);
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
		else if (this.currEditingMode == editingMode.circle) {
			var dx = dnd.finalX - dnd.initialX;
			var dy = dnd.finalY - dnd.initialY;
			this.currentShape.r = Math.sqrt(dx * dx + dy * dy);
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
		else if (this.currEditingMode == editingMode.circle) {
			var dx = dnd.finalX - dnd.initialX;
			var dy = dnd.finalY - dnd.initialY;
			this.currentShape.r = Math.sqrt(dx * dx + dy * dy);
		}
		drawing.shapes.push(this.currentShape);
		drawing.paint(ctx, canvas);
		updateShapeList(drawing);
		this.currentShape = 0;
		console.log(drawing);
	}.bind(this);

};


