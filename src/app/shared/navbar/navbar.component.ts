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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
