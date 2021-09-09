import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appSectionAnimation]',
})
export class SectionAnimationDirective implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef) {
    console.log('elementResf', this.elementRef);
  }

  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
