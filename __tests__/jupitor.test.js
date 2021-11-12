import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest";
import Jupiter from '../src/js/jupiter.js';


describe('Jupiter', () => {
    
    test('it should create a new jupiter object with a year value of 11.86', () => {
      const newJupiter = new Jupiter();
      expect(newJupiter.yearValue).toEqual(11.86)
      
    });
    
});

