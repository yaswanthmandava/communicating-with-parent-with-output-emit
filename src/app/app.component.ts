import { Component, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private el: ElementRef) {}
  handleChange(color) {
    this.el.nativeElement.ownerDocument.body.style.backgroundColor = color;
  }
}
