export default class Mars{
  constructor(age, lifeExpect){
    this.age =age;
    this.lifeExpect = lifeExpect;
    this.yearValue = 1.88;
    this.marsAge = 0;
  }

  calculateAge(){
    return this.marsAge += Math.floor((this.age / this.yearValue))
  }

  yearsLeft(){
    if ((this.lifeExpect - this.marsAge) > 0) {
      return (this.lifeExpect - this.marsAge);
    }
  }
}