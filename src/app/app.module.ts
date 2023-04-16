
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StdFormComponent } from './std-form/std-form.component';
import { StdTableComponent } from './std-table/std-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
