import { Component } from '@angular/core';
import { CService } from './definitions/cservice';

import { installedPreviewByCService } from './installed'
import { InstalledServicesService } from './services/installed-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InstalledServicesService]
})
export class AppComponent {

  installedServices: CService[] = null;
  installedPreviewByCService;
  get validServices(): CService[] {
    var returner: CService[] = [];
    if (this.serviceBasedOnKey) {
      returner.push(this.serviceBasedOnKey);
    }
    else {
      for (var service of this.installedServices) {
        if (service.valid)
          returner.push(service);
      }
    }
    return returner;
  }
  input = '';

  get firstWord(): string {
    var posOfLastChar: number = this.input.indexOf(" ");
    if (posOfLastChar == -1) {
      posOfLastChar = this.input.length;
    }
    return this.input.substr(0, posOfLastChar);
  }

  get availableKeys(): Dict<number> {
    var availableKs: Dict<number> = {};
    var index = 0;
    for (var service of this.installedServices) {
      for (var key of service.keys) {
        availableKs[key] = index;
      }
      index++;
    }
    return availableKs;
  }

  get firstWordIsAvailableKey(): boolean {
    return this.availableKeys.hasOwnProperty(this.firstWord);
  }

  serviceBasedOnKey: CService = null;

  private _activeRow = 0;
  public get activeRow(): number {
    return this._activeRow;
  };
  public set activeRow(nmbr: number) {
    var amountOfValidServices = this.validServices.length;

    if (nmbr >= amountOfValidServices) {
      this._activeRow = 0;
    } else if (nmbr < 0) {
      this._activeRow = amountOfValidServices - 1;
    } else {
      this._activeRow = nmbr;
    }
  };

  constructor(installedServices: InstalledServicesService) {
    this.installedServices = installedServices.array;
    this.installedPreviewByCService = installedPreviewByCService;
  }

  public onKey(event: any) {


    if (event.keyIdentifier === "Up") {
      console.log("up");
      console.log("event: ",event);
      this.activeRow -= 1;

      var pos = event.selectionStart;      
      event.selectionStart = pos; event.selectionEnd = pos;
      event.preventDefault();

      console.log("activeRow", this.activeRow);
      return false;
    }
    if (event.keyIdentifier === "Down") {
      console.log("down");
      console.log("event: ",event);
      this.activeRow += 1;

      var pos = event.selectionStart;      
      event.selectionStart = pos; event.selectionEnd = pos;
      event.preventDefault();
        
      console.log("activeRow", this.activeRow);
      return false;
    }


    if (this.firstWordIsAvailableKey) {
      this.serviceBasedOnKey = this.installedServices[this.availableKeys[this.firstWord]];
      var query = this.input.substr(this.input.indexOf(" ") + 1);

      if (event.keyIdentifier === "Enter") {
        this.serviceBasedOnKey.action(query);
      } else {
        this.serviceBasedOnKey.changed(query);
      }

    } else {
      this.serviceBasedOnKey = null;

      // do for all services
      for (var service of this.installedServices) {
        service.changed(this.input);
        if (event.keyIdentifier === "Enter") {
          this.validServices[this.activeRow].action(this.input);
        }
      }
    }





  }


}


interface Dict<T> {
  [K: string]: T;
}