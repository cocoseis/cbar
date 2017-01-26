import { Component } from '@angular/core';
import { CService } from './definitions/cservice';
import { CCollection } from './definitions/ccollection';

import { CSearchCCollection } from './coco-services/csearch/csearch.ccollection';
import { CCalcCCollection } from './coco-services/ccalc/ccalc.ccollection';
import { CFileSystemCCollection } from './coco-services/cfilesystem/cfilesystem.ccollection';
/** ###@@@### marker for cbar-cli import ###@@@### */

export const installedCCollections:CCollection[] = [
  CCalcCCollection
, CSearchCCollection
// , CFileSystemCCollection
/** ###@@@### marker for cbar-cli installedCCollections ###@@@### */
];

// ============================================================================================
// ============================================================================================
// ============================================================================================
// following generates based on the above installedCCollections
// ============================================================================================
// ============================================================================================
// ============================================================================================

export const installedCServices/** :(typeof CService)[] */ = function () {
    var returner = [];
    installedCCollections.forEach((service) => {
        returner.push(service.cService);
    });
    return returner;
} ();

export const installedPreviews/** :(typeof Component)[] */ = function () {
    var returner = [];
    installedCCollections.forEach((service) => {
        returner.push(service.preview);
    });
    return returner;
} ();

export function installedPreviewByCService(srvc/** :typeof CService*/)/** :typeof Component */ {
    var returner = null;
    installedCCollections.forEach((collection) => {
        if (collection.cService.name.toString() === srvc.constructor.name) {
            returner = (collection.preview);
        }
    });
    return returner;
}