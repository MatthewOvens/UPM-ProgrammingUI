import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.highlight('rgb(13 110 253 / 25%)');
  }

  @HostListener('blur') onBlur() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
}
