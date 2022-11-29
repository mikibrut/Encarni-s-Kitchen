class Game{
  constructor(context) {
    this.ctx = context;
    this.pot = new Player(500, 400, 100, 100);
    this.ingredient = new Ingredient
    this.points = 3;
    }

  _drawPot(){
    this.ctx.drawImage(this.pot.image, this.pot.x, this.pot.y, this.pot.width, this.pot.height )
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update(){
    this._clean();
    this._drawPot();
    window.requestAnimationFrame(() => this._update())
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
          break;
        default:
          break;
      }
    });
  }

 
  start() {
    this._assignControls();
    this._update();
  }
}