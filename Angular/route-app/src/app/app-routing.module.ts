import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyAgeComponent } from './family-age/family-age.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { FamilyDobComponent } from './family-dob/family-dob.component';
import { FamilyMembersComponent } from './family-members/family-members.component';

const routes: Routes = [
  {path:'family-details',component:FamilyDetailsComponent},
  {path:'family-age',component:FamilyAgeComponent},
  {path:'family-dob',component:FamilyDobComponent},
  {path:'family-members',component:FamilyMembersComponent},
  {path:'',redirectTo:'/family-details', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
