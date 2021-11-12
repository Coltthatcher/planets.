import { exportAllDeclaration } from "@babel/types";
import Mars from "../src/js/mars";

describe('Mars', ()=> {

  test('it should create a new mars object with the year value of 1.88', () => {
    const newMars = new Mars();
    expect(newMars.yearValue).toEqual(1.88)
  });
  
})