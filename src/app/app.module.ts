import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { installedCServices, installedPreviews } from './installed';
import { DclWrapperComponent } from './components/dcl-wrapper/dcl-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DclWrapperComponent,
    installedPreviews
  ],
  entryComponents: installedPreviews,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: installedCServices,
  bootstrap: [AppComponent]
})
export class AppModule { }