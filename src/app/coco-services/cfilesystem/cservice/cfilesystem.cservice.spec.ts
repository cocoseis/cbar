/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CFileSystem } from './cfilesystem.cservice';

describe('CFileSystem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CFileSystem]
    });
  });

  it('should ...', inject([CFileSystem], (service: CFileSystem) => {
    expect(service).toBeTruthy();
  }));
});
