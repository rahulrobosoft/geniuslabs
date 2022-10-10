import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { FamilyAgeComponent } from './family-age/family-age.component';
import { FamilyDobComponent } from './family-dob/family-dob.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyDetailsComponent,
    FamilyMembersComponent,
    FamilyAgeComponent,
    FamilyDobComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
