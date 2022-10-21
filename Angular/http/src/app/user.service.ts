import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface body {
  name : string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  body1!: body;
  body2!:body;
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  addUser():Observable<body>{
    this.body1 = {
      name : 'Rahul Shetty',
      
    }
    return this.http.post<body>('https://jsonplaceholder.typicode.com/users',this.body1);
  }

  updateUser(){
    this.body2 = {
      name : 'Nithin',
    }
    return this.http.put<body>('https://jsonplaceholder.typicode.com/users/10',this.body2);
  }
}
