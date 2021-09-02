import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  showNavbar = true;
  showSidebar = true;
  showFooter = true;
  isLoading: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/user/page/login' ||
          event.url === '/user-pages/register' ||
          event.url === '/error-pages/404' ||
          event.url === '/error-pages/500'
        ) {
          this.showFooter = false;
          this.showNavbar = false;
          this.showSidebar = false;
          document.querySelector('.main-panel')?.classList.add('w-100');
          document
            .querySelector('.page-body-wrapper')
            ?.classList.add('full-page-wrapper');
          document
            .querySelector('.content-wrapper')
            ?.classList.remove('auth', 'auth-img-bg');
          document
            .querySelector('.content-wrapper')
            ?.classList.remove('auth', 'lock-full-bg');
          if (
            event['url'] == '/error-pages/404' ||
            event['url'] == '/error-pages/500'
          ) {
            document.querySelector('.content-wrapper')?.classList.add('p-0');
          }
        } else {
          this.showFooter = true;
          this.showNavbar = true;
          this.showSidebar = true;
          document.querySelector('.main-panel')?.classList.remove('w-100');
          document
            .querySelector('.page-body-wrapper')
            ?.classList.remove('full-page-wrapper');
          document
            .querySelector('.content-wrapper')
            ?.classList.remove('auth', 'auth-img-bg');
          document.querySelector('.content-wrapper')?.classList.remove('p-0');
        }
      }
    });
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        // console.log("event", event);
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        console.log('triggered');
        // window.scrollBy(0, 0);
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
