import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  constructor() {}
  hotels = [
    {
      name: 'ibis',
      addr: 'adresse 1',
    },
    {
      name: 'mercure',
      addr: 'adresse 2',
    },
    {
      name: 'F1',
      addr: 'adresse 3',
    },
  ];
  ngOnInit(): void {}
}
