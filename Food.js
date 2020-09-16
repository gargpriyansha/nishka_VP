class Food {
    constructor() {

        this.foodStock=0;
        this.lastFed;
        this.image = loadImage("images/milk.png");
        
    }
    

    updateFoodStock(foodstock) {
                this.foodstock= foodstock;
    }
    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodstock = this.foodStock - 1; 
        }
    }

    getFoodStock() {
        return this.foodStock;
    }
    display() {

        background("purple");
        fill("white");
        textSize(15)
         if(this.lastFed >= 12){
             text("Last feed : " +this.lastFed%12 + "PM" , 50,30);
         } else if(this.lastFed == 0){
             text("Last Feed :12 AM " , 50,30);
         }
         else{
             text("Last feed : " +lastFed +"AM", 50,30);
         }
            var x = 80, y = 100

            imageMode(CENTER);
            if (this.foodStock != 0) {
                for (var i = 0; i < this.foodstock; i++) {
                    if (i % 10 == 0) {
                        x = 80;
                        y = y + 50;
                    }
                    image(this.image, x, y, 50, 50);
                    x = x + 30;
                }
            }
        }

        bedroom(){
            background(bedroom, 550, 500);
        }
        garden(){
            background(garden, 550, 500);
        }
        washroom(){
            background(washroom, 550, 500);
        }
    }
        

       