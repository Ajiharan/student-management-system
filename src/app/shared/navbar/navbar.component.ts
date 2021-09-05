import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  onlineEvent: Observable<Event> | undefined;
  offlineEvent: Observable<Event> | undefined;
  subscription: Subscription = new Subscription();
  isOnline: boolean = true;
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor() {}

  ngOnInit(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');
    this.subscription.add(
      this.onlineEvent.subscribe((event) => {
        console.log('online');
        this.isOnline = true;
      })
    );

    this.subscription.add(
      this.offlineEvent.subscribe((event) => {
        console.log('offline');
        this.isOnline = false;
      })
    );
  }
  toggleSidebar() {
    const body = document.querySelector('body');
    body?.classList.toggle('sidebar-only-icon');

    if (body?.classList.contains('sidebar-only-icon')) {
      this.iconOnlyToggled = true;
    } else {
      this.iconOnlyToggled = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const btn = document.querySelector('.btn-bar');
    const body = document.querySelector('body');

    if (event.target?.innerWidth >= 860) {
      if (btn?.classList.contains('btn-toggle-bar')) {
        btn?.classList.remove('btn-toggle-bar');
      }
      if (body?.classList.contains('sidebar-only-icon')) {
        if (!this.iconOnlyToggled) {
          body?.classList.remove('sidebar-only-icon');
        }
      }
    } else {
      if (!btn?.classList.contains('btn-toggle-bar')) {
        btn?.classList.add('btn-toggle-bar');
      }
      if (!body?.classList.contains('sidebar-only-icon')) {
        if (!this.iconOnlyToggled) {
          body?.classList.add('sidebar-only-icon');
        }
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
