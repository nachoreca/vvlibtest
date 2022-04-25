import { Component } from '@angular/core';
import { specialAddMethod, VvLibService } from 'vv-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: VvLibService) {

  }

  addTwoNums(a:number, b:number) : number {
    return specialAddMethod(a,b);
  }

  subTwoNums(a:number, b:number) : number {
    return this.service.specialSubMethod(a,b);
  }

  title = 'testing';
}
