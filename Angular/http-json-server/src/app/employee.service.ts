import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmp(){
    return this.http.get('http://localhost:3000/employees')
  }
  addEmp(name:string){
    const body = {
      name : name,
    }
    return this.http.post('http://localhost:3000/employees',body);
  }

  editEmp(cid:string,name:string){
    const body1 = {
      id : cid,
      name : name,
    }
 


    const url = 'http://localhost:3000/employees/' + cid;
    return this.http.put( url ,body1);
  }

  delEmp(id:string){
    return this.http.delete('http://localhost:3000/employees/' + id);
  }
}
