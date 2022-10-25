import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  user = {
    fname : 'Rahul',
    lname : 'Shetty',
    age : 22,
  };

  fname = 'rahul';
  lname = 'SHETTY';
  price = 200;
  date = Date.now();
  score = 0.9;

  d!:Date | null;


  dob = [
    {name:"Rahul", dob:'Jul-17-2000'},
    {name:"Satya", dob:'Jul-22-1963'}
  ]


  calc(dob:Date | null){
    this.d = dob;
   
    
  } 
}
