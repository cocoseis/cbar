/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CCalc } from './ccalc.cservice';

describe('CCalc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CCalc]
    });
  });

  it('should ...', inject([CCalc], (service: CCalc) => {
    expect(service).toBeTruthy();
  }));
});
