import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]',
})
export class AdvanceHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  // with this set up, we have direct access to this property on this element
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  private hasRaisedClass = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // This decorator allow ud to listen for a specified event that we want to react to
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '24px');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click') onClick(eventDat: Event) {
    if (this.hasRaisedClass)
      this.renderer.removeClass(this.elementRef.nativeElement, 'raised');
    else this.renderer.addClass(this.elementRef.nativeElement, 'raised');
    this.hasRaisedClass = !this.hasRaisedClass;
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

  ngOnInit() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );*/

    // with this property, and because we set it up for it, we can modify
    // the backgroundColor of the element directly
    this.backgroundColor = this.defaultColor;
  }
}
