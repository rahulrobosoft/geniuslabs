import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild('myForm') form!:NgForm;
  res:any;
  idd:any;
  constructor(private eService:EmployeeService) { }

  ngOnInit() {
    this.eService.getEmp().subscribe(data => this.res = data);
  }

  addEmp(name:string){
    this.eService.addEmp(name).subscribe((data)=>{
      this.eService.getEmp().subscribe(data => this.res = data);
    });
    
  }
  
  editEmp(id:string,name:string){
    this.form.setValue({
      edit:name,
      name:'',
    })
  }

  callEditEmp(name:string){
    this.eService.editEmp(this.idd,name).subscribe();
  }

  delEmp(id:string){
    this.eService.delEmp(id).subscribe();

  }
  


}
