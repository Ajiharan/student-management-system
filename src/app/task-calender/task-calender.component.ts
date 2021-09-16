import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-calender',
  templateUrl: './task-calender.component.html',
  styleUrls: ['./task-calender.component.scss'],
})
export class TaskCalenderComponent implements OnInit {
  model: NgbDateStruct | undefined;
  date: { year: number; month: number } | undefined;
  constructor(
    private calendar: NgbCalendar,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  getCurrentDate(cdate: any) {
    const now = new Date();
    now.setFullYear(cdate.year, cdate.month, cdate.day);
    console.log('date : ', now, cdate);
    this.dataService.setCurrentDate(now);
  }
}
