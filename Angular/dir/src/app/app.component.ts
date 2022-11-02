import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir';
  visible=true;
  color='#ececec';
  color1='#fff';
  btn1='btn1';

  ih="Make it invisible and make else part visible";

  topics = ['*ngIf-else','*ngFor','[ngStyle]','[ngClass]','Custom Attribute Directive','HostListener','HostBinding']

  fun(){
    if(this.visible == true){
      this.visible=false;
      this.ih="Bring it Back";
    }
    else{
      this.visible = true;
      this.ih="Make it invisible and make else part visible";

    }
  }
}
