import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  res:any;
  constructor(private uService1:UserService) { }

  ngOnInit(): void {
    this.uService1.addUser().subscribe(data => {
      this.res = data;
      console.log(data)});
  }

}
