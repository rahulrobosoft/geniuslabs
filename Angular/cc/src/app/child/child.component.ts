import { Component, OnInit,Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { IntermediateService } from '../intermediate.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData: string = ''; //First
  @Input() public childData: string = '';
  @Input() public groupMessage:string='';
  @Output() public childEventForParent = new EventEmitter(); 
  @Output() public childEventForChild = new EventEmitter();
  messageFromChild2:string='';

  constructor(private iService : IntermediateService) { }

 
  
  ngOnInit(): void {
    this.iService.iSubject2.subscribe(data => this.messageFromChild2 =data );
  }

  sendDataToParent(){
    this.childEventForParent.emit('Hello Father(From Child-1)');
  }

  sendDataToChild2(){
    this.childEventForChild.emit('Hello Sibling(From Child-1)');
  }

  sendDataToChild2UsingSubWithoutParent(){
    this.iService.sendDataToChild2UsingSub('Child-1 have sent this message using Subject');
  }

}
