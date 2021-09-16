import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dateSource: BehaviorSubject<any> = new BehaviorSubject(null);

  currentSelectDate = this.dateSource.asObservable();

  setCurrentDate(cdate: Date) {
    this.dateSource.next(cdate);
  }
  constructor() {}
}
