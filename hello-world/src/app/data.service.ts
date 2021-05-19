import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  info1: string[] = ['John Mathew', 'E453', 'jm@abc.net'];
  info2: string[] = ['Rob Nelson', 'E345', 'kd@fd.net'];
  info3: string[] = ['Mathew Rode', 'R444', 'nd@fka.net'];

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() {}
}
