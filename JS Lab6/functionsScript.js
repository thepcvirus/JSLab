class Engine{
    static #counter =0;

    constructor(source){
        if (new.target.name === "Engine")
            throw new Error("this class cannot be instantiated");

        this.source = source
        Engine.#counter++;
    }
}

class Car extends Engine{
    #left;
    #top;

    constructor(top,left,source){
        super(source);
        this.#left = left;
        this.#top = top;
        this.printCarState();
    }

    Top(top) {
        this.#top = top;
        this.printCarState();
    }

    Left(top) {
        this.#left = left;
        this.printCarState();
    }

    moveLeft(distance){
        this.#left += distance;
        this.printCarState();
    }

    moveRight(distance){
        this.#left -= distance;
        this.printCarState();
    }

    ChangeStyle(cssStyle){
        document.getElementById("Car").classList.add(cssStyle);
    }

    moveCar(direction){
        if(direction.length < 2)
            return false;
        if(direction[0] == 0 && direction[1] == 0)
            return false;
        this.#left += direction[0];
        this.#top += direction[1];
        
        this.printCarState();
        if(this.#left > 1920 || this.#left < 0 || this.#top > 1080 || this.#top < 0){
            this.#left = Math.min(Math.max(this.#left, 0), 1920);
            this.#top = Math.min(Math.max(this.#top, 0), 1080);
            this.printCarState();
            return true;
        }
        else var hitWall = this.moveCar(direction);
        return hitWall;
    }

    printCarState(){
        console.log("Left : " + this.#left + "| Top : " + this.#top);
    }
}

let carInstance = new Car(5,5,"imgsource");