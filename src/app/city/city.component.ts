import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  hotels = [
    {
      name: 'Ibis',
      addr: 'adresse 1',
      img: 'https://upload.wikimedia.org/wikipedia/fr/6/66/Ibis_red.jpg',
    },
    {
      name: 'Mercure',
      addr: 'adresse 2',
      img: 'https://www.uslesquin.fr/wp-content/uploads/2020/04/logo-resultat-hotel-mercure.png',
    },
    {
      name: 'F1',
      addr: 'adresse 3',
      img: 'https://media.glassdoor.com/sqll/3124301/hotelf1-le-luc-le-cannet-des-maures-squarelogo-1583207178072.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
