import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest"

import Mercury from '../src/js/mercury.js';


describe('Mercury', () => {

  test('it should create a new mercury object with a year value of .24', () => {
    const newMercury = new Mercury();
    expect(newMercury.yearValue).toEqual(.24)

  });

  test('it should return your age in mercury years', () => {
    const newMercury = new Mercury(25);
    newMercury.calculateAge();
    expect(newMercury.mercuryAge).toEqual(104)
    
  });

  test('it should determine how many years the user has left to live', () => {
    const newMercury = new Mercury(25, 105);
    newMercury.calculateAge();
    newMercury.yearsLeft();
    expect(newMercury.yearsLeft()).toEqual(1);
  });

  test('will determine how many years past past life expectancy', () => {
    const newMercury = new Mercury(25, 1);
    newMercury.calculateAge();
    newMercury.yearsLeft();
    expect(newMercury.yearsLeft()).toEqual(103);
  });
});