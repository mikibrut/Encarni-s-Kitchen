class Game{
  constructor(context) {
    this.ctx = context;
    this.pot = new Player(500, 480, 100, 100);
    this.ingredients = [];
    this.points = 0;
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

  _checkCollisions(){
    console.log('Collision! Points: ', this.points);
    this.ingredients.forEach((ingredient) => {
      if (
        (
          this.pot.x >= ingredient.x && this.pot.x <= ingredient.x + ingredient.width ||
          this.pot.x + this.pot.width >= ingredient.x && this.pot.x + this.pot.width <= ingredient.x + ingredient.width ||
          ingredient.x >= this.pot.x && ingredient.x <= this.pot.x + this.pot.width
        ) &&
        (
          this.pot.y >= ingredient.y && this.pot.y <= ingredient.y + ingredient.height ||
          this.pot.y + this.pot.height >= ingredient.y && this.pot.y + this.pot.height <= ingredient.y + ingredient.height ||
          ingredient.y >= this.pot.y && ingredient.y <= this.pot.y + this.pot.height
        )
      ) {
        if (ingredient.role === 'goodIngredient') {
          this.points++;
        } else if (ingredient.role === 'wrongIngredient') {
          this.points--;
        }
        if(this.points < 0){
          this._gameOver();
        }

        let index = this.ingredients.indexOf(ingredient);
        this.ingredients.splice(index, 1);
      }
    })
  }

  _writeScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "25px 'Press Start 2P'";
    this.ctx.fillText(`Cooking Skills: ${this.points}`, 100, 100);
  }

  _gameOver(){
    clearInterval(this.generateInterval);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update(){
    this._clean();
    this._drawPot();
    this._drawIngredients();
    this._checkCollisions();
    this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
    this._generateIngredients();
    
  }
}