import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  res:any;
  constructor(private uService:UserService) { }

  ngOnInit(): void {
    this.uService.updateUser().subscribe(data => this.res = data);
  }

}
