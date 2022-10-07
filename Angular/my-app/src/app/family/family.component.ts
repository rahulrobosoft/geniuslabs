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
      age: 22,
      gender: "M",
    },
    {
      name : "Satyanarayana",
      age : 59,
      gender : "M",
    },
    {
      name : "Anitha",
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
