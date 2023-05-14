import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkEnabled:boolean = false;


  constructor() { }
}
