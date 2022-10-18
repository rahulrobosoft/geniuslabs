import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData: string = ''; //First
  @Input() public childData: string = '';
  @Output() public childEventForParent = new EventEmitter(); 
  @Output() public childEventForChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.childEventForParent.emit('Hello Father(From Child-1)');
  }

  sendDataToChild2(){
    this.childEventForChild.emit('Hello Sibling(From Child-1)');
  }

}
