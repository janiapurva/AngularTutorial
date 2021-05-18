import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent implements OnInit {
 infoRecived1:string[] = [];
 infoRecived2:string[] = [];
 infoRecived3:string[] = [];

 getInfoService1(){}
 getInfoService2(){}
 getInfoService3(){}


  constructor() { }

  ngOnInit(): void {
  }

}
