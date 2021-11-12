import { exportAllDeclaration } from "@babel/types";
import Mars from "../src/js/mars";

describe('Mars', ()=> {

  test('it should make a new mars object with the year value of 1.88', () => {
    const newMars = new Mars();
    expect(newMars.yearValue).toEqual(1.88)
  });


  test('it should return your age in Mars years', () => {
    const newMars = new Mars(25);
    newMars.calculateAge();
    expect(newMars.marsAge).toEqual(13)
  });

  test('it should determine how many years the user has left to live', () => {
    const newMars = new Mars(25, 100);
    newMars.calculateAge();
    newMars.yearsLeft();
    expect(newMars.yearsLeft()).toEqual(87);
  })
  
})