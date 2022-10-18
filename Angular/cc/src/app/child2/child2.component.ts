import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() public parentData: string = '';
  @Input() public childData: string = '';
  @Output() public childEventforParent = new EventEmitter();
  @Output() public childEventforChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.childEventforParent.emit('Hello Dad(from Child-2)');
  }
  sendDataToChild1(){
    this.childEventforChild.emit('Hello Sibling(from Child2)');
  }

}
