
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initialX = 0;
  this.initialY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.interactor = interactor;
  // Developper les 3 fonctions gérant les événements
  function mousedown(evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.initialX = mousePos.x;
    this.initialY = mousePos.y;
    // console.log("Start at (" + this.initialX + "," + this.initialY + ")");
    interactor.onInteractionStart(this);
  }
  function mouseup(evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.finalX = mousePos.x;
    this.finalY = mousePos.y;
    // console.log("From (" + this.initialX + "," + this.initialY + ") to (" + this.finalX + "," + this.finalY + ")");
    interactor.onInteractionEnd(this);
  }
  function mousemove(evt) {
    if (this.initialX != 0 && this.initialY != 0) {
      var mousePos = getMousePosition(canvas, evt);
      this.finalX = mousePos.x;
      this.finalY = mousePos.y;
      // console.log("Moving at (" + this.finalX + "," + this.finalY + ")");
      interactor.onInteractionUpdate(this);
    }
  }
  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', mousedown.bind(this), false);
  canvas.addEventListener('mouseup', mouseup.bind(this), false);
  canvas.addEventListener('mousemove', mousemove.bind(this), false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
