import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc';

  public nameToChild1 = "";
  public nameToChild2 = "";
  public messageFromChildren:string='';
  public message1:string='';
  public messageFromChild1:string="";
  public msgFromChild2:string="";

  
  sendDataToChild1(){
    this.nameToChild1="Hello Rahul";
  }

  sendDataToChild2(){
    this.nameToChild2="Hello Shetty";
  }

 
}
