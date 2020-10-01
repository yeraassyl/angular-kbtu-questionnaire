import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnarieComponent } from './questionnarie/questionnarie.component';
import { FormsModule } from '@angular/forms';
import { FilloutComponent } from './fillout/fillout.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnarieComponent,
    FilloutComponent,
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
