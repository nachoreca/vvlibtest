import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VvLibService {

  constructor() { }
  
  specialSubMethod(a:number, b:number) : number {
	  return a - b;
  }
}
