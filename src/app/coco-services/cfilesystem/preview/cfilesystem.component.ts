import { Component } from '@angular/core';
import { CFileSystem } from './../cservice/cfilesystem.cservice';

@Component({
  selector: 'cfilesystem-preview',
  templateUrl: 'cfilesystem.component.html',
  styleUrls: ['cfilesystem.component.scss']
})
export class CFileSystemPreviewComponent {
    constructor(private cFileSystem: CFileSystem) {
    }

}