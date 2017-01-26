import { CService } from './../../definitions/cservice';
import { CCollection } from './../../definitions/ccollection';
import { Injectable, Component } from '@angular/core';

import { CFileSystem } from './cservice/cfilesystem.cservice';
import { CFileSystemPreviewComponent } from './preview/cfilesystem.component';

export const CFileSystemCCollection:CCollection = {
        cService: CFileSystem,
        preview: CFileSystemPreviewComponent
};