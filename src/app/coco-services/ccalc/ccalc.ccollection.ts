import { CService } from './../../definitions/cservice';
import { CCollection } from './../../definitions/ccollection';
import { Injectable, Component } from '@angular/core';

import { CCalc } from './cservice/ccalc.cservice';
import { CCalcPreviewComponent } from './preview/ccalc.component';

export const CCalcCCollection:CCollection = {
        cService: CCalc,
        preview: CCalcPreviewComponent
};