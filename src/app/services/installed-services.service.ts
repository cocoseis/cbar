import { Injectable, Injector } from '@angular/core';
import { CService } from './../definitions/cservice';

import { installedCServices } from './../installed';

@Injectable()
export class InstalledServicesService {

    array:CService[] = [];

    constructor(private injector: Injector) {
        // this.array = [ // sorted by priority
        //     this.injector.get(ACTIVE[0]),
        //     this.injector.get(ACTIVE[1])
        // ];

      installedCServices.forEach((service)=> {
          this.array.push( this.injector.get(service) );
      });

    }

}