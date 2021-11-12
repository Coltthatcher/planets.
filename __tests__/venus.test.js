import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest";
import Venus from "../src/js/venus";

describe('Venus', ()=> {

  test('it should create a new venus object with a year value of .62', () => {
    const newVenus = new Venus();
    exportAllDeclaration(newVenus.yearValue).toEqual(.62)
  });
})