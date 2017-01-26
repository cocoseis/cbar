import { CService } from './../../definitions/cservice';
import { CCollection } from './../../definitions/ccollection';
import { Injectable, Component } from '@angular/core';

import { CSearch } from './cservice/csearch.cservice';
import { CSearchPreviewComponent } from './preview/csearch.component';

export const CSearchCCollection:CCollection = {
        cService: CSearch,
        preview: CSearchPreviewComponent
};