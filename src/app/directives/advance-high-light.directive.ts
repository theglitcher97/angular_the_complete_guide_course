import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]',
})
export class AdvanceHighlightDirective implements OnInit {
  // with this set up, we have direct access to this property on this element
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // This decorator allow ud to listen for a specified event that we want to react to
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '24px');
  }

  /*@HostListener('mouseover') mouseover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'purple'
    );
  }*/

  /*@HostListener('mouseout') mouseout() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }*/

  // This decorator allow us to bind to a property of the element this directive sits on

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log(eventData);
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');
  }

  ngOnInit() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );*/

    // with this property, and because we set it up for it, we can modify
    // the backgroundColor of the element directly
    this.backgroundColor = 'green';
  }
}
