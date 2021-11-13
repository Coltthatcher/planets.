import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest";
import Venus from "../src/js/venus";

describe('Venus', ()=> {

  test('it should create a new venus object with a year value of .62', () => {
    const newVenus = new Venus();
    expect(newVenus.yearValue).toEqual(.62)
  });

  test('It should return your age in venus years', () => {
    const newVenus = new Venus(25);
    newVenus.calculateAge();
    expect(newVenus.venusAge).toEqual(40);
  });

  test('it should determine how many years the user has left to live', () => {
    const newVenus = new Venus(25, 100)
    newVenus.calculateAge();
    newVenus.yearsLeft();
    expect(newVenus.yearsLeft()).toEqual(60)

  });

  test('it will determine how many years they are past life expectancy', () => {
    const newVenus = new Venus(25, 100)
    newVenus.calculateAge();
    newVenus.yearsLeft();
    expect(newVenus.yearsLeft()).toEqual(1);
  });
})