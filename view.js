Rectangle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.lw;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.lineWidth = this.lw;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

// Dessin du cercle
Circle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.lw;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
};


Drawing.prototype.paint = function (ctx) {
    // console.log(this.getForms());
    ctx.fillStyle = '#D3D3D3'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

// Met à jour la liste des formes dans l'élément #shapeList
function updateShapeList(drawing) {
    var list = document.getElementById('shapeList');
    if (!list) return;

    // Réinitialise la liste
    while (list.firstChild) list.removeChild(list.firstChild);

    // Ajoute un <li> par forme avec un libellé selon le type
    drawing.shapes.forEach(function (shape, index) {
        var li = document.createElement('li');
        // Texte selon le type
        var label;
        if (shape instanceof Rectangle) {
            label = ' Rectangle (' + Math.round(shape.x) + ',' + Math.round(shape.y) + ') ' + Math.round(shape.w) + '×' + Math.round(shape.h);
        } else if (shape instanceof Line) {
            label = ' Ligne (' + Math.round(shape.x) + ',' + Math.round(shape.y) + ') → (' + Math.round(shape.x2) + ',' + Math.round(shape.y2) + ')';
        } else if (shape instanceof Circle) {
            label = ' Cercle (' + Math.round(shape.x) + ',' + Math.round(shape.y) + ') r=' + Math.round(shape.r);
        } else {
            label = ' Forme';
        }
        li.appendChild(document.createTextNode(label));
        list.appendChild(li);
        // Bouton demandé (Bootstrap + glyphicon)
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-default';
        // on stocke l'index pour un éventuel traitement ultérieur
        btn.setAttribute('data-index', String(index));
        var span = document.createElement('span');
        span.className = 'glyphicon glyphicon-remove-sign';
        btn.appendChild(span);
        li.appendChild(btn);
    });
}

