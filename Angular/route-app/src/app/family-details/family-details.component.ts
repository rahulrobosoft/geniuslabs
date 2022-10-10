import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FamilyDetails } from './family-details';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {

  details:FamilyDetails[] = [
    {
      slNo:1,
      name:"Rahul Y",
      dob:"17/Jul/2000",
      age:22,
    },
    {
      slNo:2,
      name:"Satyanarayana Y",
      dob:"22/Jul/1963",
      age:63
    },
    {
      slNo:3,
      name:"Anitha Y",
      dob:"15/Aug/1970",
      age:52
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
