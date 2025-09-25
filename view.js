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

Drawing.prototype.paint = function (ctx) {
    // console.log(this.getForms());
    ctx.fillStyle = '#D3D3D3'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

