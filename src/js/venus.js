export default class Venus{
  constructor(age, lifeExpect){
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.yearValue = .62;
    this.venusAge = 0;
  }
  calculateAge(){
    return this.venusAge += Math.floor((this.age / this.yearValue))
  }
}
