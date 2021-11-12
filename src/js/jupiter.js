export default class Jupiter{
  constructor(age, lifeExpect){
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.yearValue = 11.86;
    this.jupiterAge = 0;
  }
  calculateAge(){
    return this.jupiterAge += Math.floor((this.age / this.yearValue))
  }

  yearsLeft(){
    return (this.jupiterAge - this.lifeExpect)
  }
  
}



