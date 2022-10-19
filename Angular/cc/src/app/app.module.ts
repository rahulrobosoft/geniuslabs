import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { IntermediateService } from './intermediate.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IntermediateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
