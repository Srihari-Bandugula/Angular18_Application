
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOutOfStock]'
})
export class OutOfStockDirective implements OnInit {
  @Input() appOutOfStock: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appOutOfStock) {
      this.el.nativeElement.style.opacity = '0.5';
      this.el.nativeElement.style.borderLeft = '4px solid red';
    }
  }
}
