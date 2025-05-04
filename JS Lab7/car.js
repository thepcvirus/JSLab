
export class Car{
  constructor(model, year){
    this.Model = model;
    this.Year = year;
  }

  toString(){
    console.log(this.Model + " _ " + this.Year); 
  }
}
