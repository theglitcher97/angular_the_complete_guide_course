import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
  // ElementRef makes reference (duh) to the element this directive sits on
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
