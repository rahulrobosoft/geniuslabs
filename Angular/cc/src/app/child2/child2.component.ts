import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit,Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IntermediateService } from '../intermediate.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() public parentData: string = '';
  @Input() public childData: string = '';
  @Input() public groupMessage1:string='';
  @Output() public childEventforParent = new EventEmitter();
  @Output() public childEventforChild = new EventEmitter();

  messageFromChild1:string='';

  constructor(private iService:IntermediateService) { }

  

  ngOnInit(): void {
    this.iService.iSubject.subscribe(data => this.messageFromChild1 = data );
  }

  sendDataToParent(){
    this.childEventforParent.emit('Hello Dad(from Child-2)');
  }
  sendDataToChild2(){
    this.childEventforChild.emit('Hello Sibling(from Child2)');
  }
  sendDataToChild1WithoutParent(){
    this.iService.sendDataToChild1UsingSub('Child-2 have sent this message using subject')
  }

}
