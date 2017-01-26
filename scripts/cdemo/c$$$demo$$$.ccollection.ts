import { CService } from './../../definitions/cservice';
import { CCollection } from './../../definitions/ccollection';
import { Injectable, Component } from '@angular/core';

import { C$$$$Demo$$$$ } from './cservice/c$$$demo$$$.cservice';
import { C$$$$Demo$$$$PreviewComponent } from './preview/c$$$demo$$$.component';

export const C$$$$Demo$$$$CCollection:CCollection = {
        cService: C$$$$Demo$$$$,
        preview: C$$$$Demo$$$$PreviewComponent
};