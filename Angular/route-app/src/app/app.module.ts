import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { FamilyAgeComponent } from './family-age/family-age.component';
import { FamilyDobComponent } from './family-dob/family-dob.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectedSlnoComponent } from './selected-slno/selected-slno.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyDetailsComponent,
    FamilyMembersComponent,
    FamilyAgeComponent,
    FamilyDobComponent,
    NavigationComponent,
    NotFoundComponent,
    SelectedSlnoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
