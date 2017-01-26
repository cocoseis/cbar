/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstalledServicesService } from './installed-services.service';

describe('InstalledServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstalledServicesService]
    });
  });

  it('should ...', inject([InstalledServicesService], (service: InstalledServicesService) => {
    expect(service).toBeTruthy();
  }));
});
