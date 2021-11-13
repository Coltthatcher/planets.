export default class Mercury{
  constructor(age,lifeExpect){
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.yearValue = .24;
    this.mercuryAge = 0;
  }
  calculateAge(){
    return this.mercuryAge += Math.floor((this.age / this.yearValue))
  }
}