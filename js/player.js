class Player {
    constructor (x, y, width, height){
        this.image = pot;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveRight(){
        this.x = this.x + 15;
        if (this.x > 1000){
            this.x = 0 - this.width;
        }
    }

    moveLeft(){
        this.x = this.x - 15;
        if (this.x - this.width < -120){
            this.x = 1000;
        }
    }
}