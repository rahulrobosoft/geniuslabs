import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  details:any;
  constructor(private uSerive:UserService) { }

  ngOnInit(): void {
    this.uSerive.getUser().subscribe(data=>{this.details=data});
  }

}
