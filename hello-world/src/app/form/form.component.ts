import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  submit(login:any){
    console.log("Form Submitted" , login)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
