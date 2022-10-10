import { Component, OnInit } from '@angular/core';
import { MembersDetails } from './family';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  familyNaME = "Sweet";
  color = 'red';
  total = 5;

  details: MembersDetails[] = [
    {
      name: "Rahul",
      dob:new Date('17-Jul-2000'),
      age: 22,
      gender: "M",
    },
    {
      name : "Satyanarayana",
      dob:new Date('22-Jul-1963'),
      age : 59,
      gender : "M",
    },
    {
      name : "Anitha",
      dob:new Date('15-Aug-1970'),
      age : 53,
      gender : "F"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  fun() {
    this.familyNaME = "Sweetest";
    this.color = 'blue';
    this.total = 6;
  }
}
