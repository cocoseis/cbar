import { Component } from '@angular/core';
import { CCalc } from './../cservice/ccalc.cservice';

@Component({
  selector: 'ccalc-preview',
  templateUrl: 'ccalc.component.html',
  styleUrls: ['ccalc.component.scss']
})
export class CCalcPreviewComponent {
    constructor(private cCalc: CCalc) {}

}