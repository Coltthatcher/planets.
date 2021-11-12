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
})