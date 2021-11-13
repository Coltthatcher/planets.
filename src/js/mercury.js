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


  yearsLeft(){
    if ((this.lifeExpect - this.mercuryAge) > 0){
      return (this.lifeExpect - this.mercuryAge);
    }else {
      return (this.mercuryAge - this.lifeExpect);
    }
  }
}