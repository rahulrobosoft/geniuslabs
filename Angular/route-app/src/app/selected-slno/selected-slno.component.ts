import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-slno',
  templateUrl: './selected-slno.component.html',
  styleUrls: ['./selected-slno.component.css']
})
export class SelectedSlnoComponent implements OnInit {

  id:number = 0;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {this.id = params['id']});
  }
}
