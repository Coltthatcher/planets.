import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest"

import Mercury from '../src/js/mercury.js';


describe('Mercury', () => {

  test('it should create a new mercury object with a year value of .24', () => {
    const newMercury = new Mercury();
    expect(newMercury.yearValue).toEqual(.24)

  });

  test('it should return your age in jupiter years', () => {
    const newMercury = new Mercury(25);
    newMercury.calculateAge();
    expect(newMercury.yearValue).toEqual(104)
    
  })
});