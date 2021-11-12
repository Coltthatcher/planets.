import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest"

describe('Jupiter', () => {
    
    test('it should create a new jupiter object with a value of 11.86', () => {
      const newJupiter  = new Jupiter() ;
      expect(newJupiter).toEqual(11.86)
      
    });
    
});

