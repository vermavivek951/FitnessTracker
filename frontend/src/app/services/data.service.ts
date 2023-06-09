import { Injectable } from '@angular/core';
import { IComp } from 'app/components/IComp';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private temp: Array<IComp>=[];

  setDataArray(data: any) {
    this.temp.push(data);
    console.log(this.temp)
  }

  getDataArray(): any[] {
    return this.temp;
  }
}
