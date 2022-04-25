import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-vv-lib',
  templateUrl: './vv-lib.component.html',
  styleUrls: ['./vvlib.component.scss']
})
export class VvLibComponent implements OnInit {

  @Input() textReceived: string;
  constructor() { }

  ngOnInit(): void {
  }
}
export function specialAddMethod(a: number, b:number): number {
	return a + b;
}