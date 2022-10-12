import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  mail:string = '';
  defaultLikes ='Absolutely Yes'

  likes = [
    {id:1,value:'Absolutely Yes'},
    {id:2,value:'No'},
  ]

  onSubmit(form:NgForm){
   console.log(form);
  }



}
