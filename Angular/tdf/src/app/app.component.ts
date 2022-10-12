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
  defaultLikes ='Absolutely Yes';

  @ViewChild('myForm')form!: NgForm;

  likes = [
    {id:1,value:'Absolutely Yes'},
    {id:2,value:'No'},
  ]

  onSubmit(){
    console.log(this.form);
    this.form.reset();
   }

  

  setDefaultValues(){
    this.form.setValue({
      email:"rahul.y@gmail.com",
      password:"@Kishore_17",
      like:"Absolutely Yes",
    })
  }
  
 


}
