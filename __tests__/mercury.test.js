import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest"

import Mercury from '../src/js/mercury.js';


describe('Mercury', () => {

  test('it should create a new mercury object with a year value of .24', () => {
    const newMercury = new Mercury();
    expect(newMercury.yearValue).toEqual(.24)

  })
})