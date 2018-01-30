import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MockdataService } from './mockdata.service';
import { ReferenceService } from './reference.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [MockdataService, ReferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
