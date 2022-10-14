import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rf';
  reactiveForm!: FormGroup;
  count: number = 0;
  dis:boolean=true;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      age: new FormControl(null, [Validators.required, Validators.min(21), Validators.max(40)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      gender: new FormControl(null, Validators.required),

      qualities: new FormArray([
        new FormControl(null, Validators.required),
      ]),

      details:new FormArray([
        new FormControl(null),
      ])

    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
    // console.log(this.reactiveForm.qualities);
    this.reactiveForm.reset();
    console.log(<FormArray>this.reactiveForm.get('age').value);
    alert('Thank you! You will find your match soon');

  }

  addQ() {
    (<FormArray>this.reactiveForm.get('qualities')).push(new FormControl(null));
    // this.count++;
  }

  addF(){
    (<FormArray>this.reactiveForm.get('details')).push(new FormControl(null));
    // (<FormArray>this.reactiveForm.get('details')).push(new FormControl(null));
  }
}
