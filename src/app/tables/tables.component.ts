import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  countries: any[] = [
    {
      name: 'Uk',
      area: 17075200,
      population: 146989754,
    },
    {
      name: 'Uk',
      area: 17075200,
      population: 146989754,
    },
    {
      name: 'Uk',
      area: 17075200,
      population: 146989754,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
