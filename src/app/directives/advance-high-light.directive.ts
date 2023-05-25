import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]',
})
export class AdvanceHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // This decorator is listening for a specified event that we can react to
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '24px');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
  }
}
