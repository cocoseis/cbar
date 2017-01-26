import { Component } from '@angular/core';

export abstract class CService{
  abstract keys:string[];
  abstract valid:boolean;
  abstract action(query:string);
  abstract changed(query:string);
}