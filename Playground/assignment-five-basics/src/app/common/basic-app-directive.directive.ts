import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBasicAppDirective]'
})
export class BasicAppDirectiveDirective implements OnInit{

  @Input() defaultColor: string;
  @Input() hoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    // Type-1 : eleRef.nativeElement.style.backgroundColor = "pink";

  }

  ngOnInit(): void {
   // Type-2: this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'pink');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }


}
