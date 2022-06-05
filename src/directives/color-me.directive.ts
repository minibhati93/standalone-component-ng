import { Directive, ElementRef, inject } from '@angular/core';

function injectStyles() {
  const elementRef = inject(ElementRef);
  return elementRef.nativeElement;
}

@Directive({
  selector: '[appColorMe]',
  standalone: true,
})
export class ColorMeDirective {
  elementRef = injectStyles();

  ngOnInit() {
    this.elementRef.style.backgroundColor = 'yellow';
  }
}
