import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

@Component({
  selector: 'app-task-calender',
  templateUrl: './task-calender.component.html',
  styleUrls: ['./task-calender.component.scss'],
})
export class TaskCalenderComponent implements OnInit {
  model: NgbDateStruct | undefined;
  date: { year: number; month: number } | undefined;
  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {}
}
