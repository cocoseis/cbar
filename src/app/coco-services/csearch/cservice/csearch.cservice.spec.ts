/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CSearch } from './csearch.cservice';

describe('CSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CSearch]
    });
  });

  it('should ...', inject([CSearch], (service: CSearch) => {
    expect(service).toBeTruthy();
  }));
});
