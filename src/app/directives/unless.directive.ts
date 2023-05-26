import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]',
})
// this directive is supposed to work as the opposite of ngIf
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  @Input() set unless(condition: boolean) {
    // when the condition is false, we want to display something
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // when the condition is true we want to display nothing
      this.vcRef.clear();
    }
  }
}
