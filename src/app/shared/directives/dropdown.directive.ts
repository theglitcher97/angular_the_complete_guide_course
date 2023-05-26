import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  /* when this property is false, the class 'open' is remove,
  otherwise is added */
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef) {}

  // this only listen for the event on the current element
  /*@HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
  }*/

  /** this listener will be trigger on any click on the whole document, but only after
   * the element with this directive has been loaded */
  @HostListener('document:click', ['$event']) toggleDocumentMenus(
    event: Event
  ) {
    console.log(event.target);
    /**
     * event.target is the element being clicked on, we are checking if the element this
     * directive sits on contains that element, if so, we toggle the 'open' class, otherwise just close it,
     * that means that, if we have an opened menu, and we clicked outside of it, it will be closed.
     * */
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
