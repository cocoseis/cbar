import { Component } from '@angular/core';
import { CSearch } from './../cservice/csearch.cservice';

@Component({
  selector: 'csearch-preview',
  templateUrl: 'csearch.component.html',
  styleUrls: ['csearch.component.scss']
})
export class CSearchPreviewComponent {
    constructor(private cSearch: CSearch) {}

}