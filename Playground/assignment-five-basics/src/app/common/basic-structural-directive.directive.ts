import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[show]'
})
export class BasicStructuralDirectiveDirective {

  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

  @Input() set show(condition: boolean) {
    if(condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = false;
    } else if (!condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
