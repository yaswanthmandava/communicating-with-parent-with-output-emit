import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <br /><br />
    <button (click)="changeColor()">change background color</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Output() backGroundChange = new EventEmitter();

  changeColor() {
    let color =
      'rgb(' +
      this.randomNumber() +
      ',' +
      this.randomNumber() +
      ',' +
      this.randomNumber() +
      ')';
    this.backGroundChange.emit(color);
  }
  randomNumber() {
    return Math.random() * 255;
  }
}
