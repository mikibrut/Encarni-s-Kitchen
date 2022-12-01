class Game{
  constructor(context) {
    this.ctx = context;
    this.pot = new Player(500, 480, 100, 100);
    this.ingredients = [];
    this.points = 3;
    this.generateInterval = null;
    }


  _generateIngredients(){
    this.generateInterval = setInterval(() => {
    const newIngredient = new Ingredient();
    newIngredient._assignRole();
    newIngredient._assignImage();
    newIngredient._fallingDown();
    this.ingredients.push(newIngredient);
    }, 1000);
  };

  _drawIngredients(){
    this.ingredients.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    });
  };

  _drawPot(){
    this.ctx.drawImage(this.pot.image, this.pot.x, this.pot.y, this.pot.width, this.pot.height);
  };

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update(){
    this._clean();
    this._drawPot();
    this._drawIngredients();
    window.requestAnimationFrame(() => this._update());
  }

  _assignControls() {
    
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.pot.moveLeft();
          break;
        case 'ArrowRight':
          this.pot.moveRight();
          break;
        default:
          break;
      }
    });
  }

 
  start() {
    this._assignControls();
    this._update();
    this._generateIngredients();
  }
}