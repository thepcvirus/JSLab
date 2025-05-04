import {Car} from "./car.js";


export class FlyingCar extends Car{
  constructor(model, year){
    super(model,year);
    this.canFly = true;
  }

  toString(){
    super.toString();
    console.log("I can Fly");
    
  }
}
