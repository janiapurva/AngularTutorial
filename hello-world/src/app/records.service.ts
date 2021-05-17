import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1 = ['John Cena', 'M1HH3', 'john.cena@wwe.com'];
  info2 = ['The Rock', 'M9DDD', 'the.rock@wwe.com'];
  info3 = ['Great Nano', 'M1EEE', 'great.nano@wwe.com'];
  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }
  constructor() {}
}
