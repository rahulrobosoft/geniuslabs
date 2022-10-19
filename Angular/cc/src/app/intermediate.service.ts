import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntermediateService {
  
  public iSubject = new BehaviorSubject<string>('Hello! I am Mr.Default from Behavior Subject');

  public iSubject2 = new BehaviorSubject<string>('Hello! I am Mr.Default from Behavior Subject');

  constructor() { }

  sendDataToChild2UsingSub(data:string){
    this.iSubject.next(data);
  }

  sendDataToChild1UsingSub(data:string){
    this.iSubject2.next(data);
  }

  


}
