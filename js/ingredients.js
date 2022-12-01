class Ingredient{
    constructor(){
        this.x = Math.floor(Math.random() * 950);
        this.y = Math.floor(Math.random() * -100);
        this.width = 50;
        this.height = 50;
        this.role = undefined;
        this.image = undefined;
        this.fallInterval = undefined;
    }

    _fallingDown(){
        this.fallInterval = setInterval(() => {
            if(this.y > 600){
                clearInterval(this.fallInterval)
            }
          this.y = this.y + 2.5;
        }, 10) 
       }

    _assignRole(){
        if(Math.floor(Math.random() * 9) > 1){
            this.role = "wrongIngredient"
        } else {
            this.role = "goodIngredient"
        }
    }

    _assignImage(){
        if(this.role === "wrongIngredient"){
            this.image = wrongImages[Math.floor(Math.random() * wrongImages.length)]
        } 
        if(this.role === "goodIngredient"){
            this.image = goodImages[Math.floor(Math.random() * goodImages.length)]
        }
    }
}