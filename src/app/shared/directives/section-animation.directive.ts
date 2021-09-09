import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { Subscription } from 'rxjs';
@Directive({
  selector: '[appSectionAnimation]',
})
export class SectionAnimationDirective implements OnInit, OnDestroy {
  player: AnimationPlayer | undefined;
  events: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private router: Router,
    private animationBuilder: AnimationBuilder
  ) {
    console.log('elementRef', this.el?.nativeElement);
  }
  initAnimate() {
    this.player = this.animationBuilder
      .build([
        style({
          transform: 'translateY(-1%)',
          opacity: 0,
          position: 'static',
          height: '100%',
        }),
        animate(
          '0.5s ease-in-out',
          style({
            transform: 'translateY(0%)',
            opacity: 1,
          })
        ),
      ])
      .create(this.el.nativeElement);
  }

  ngOnInit(): void {
    this.initAnimate();
    this.events = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.player?.play();
      }
    });
  }
  ngOnDestroy(): void {
    this.events?.unsubscribe();
    this.player?.destroy();
  }
}
