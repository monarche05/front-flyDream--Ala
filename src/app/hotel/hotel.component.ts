import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../services/taxi.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  @Input() name!: string;
  @Input() addr!: string;
  @Input() img!: string;

  // private taxi: TaxiService
  constructor(private taxi: TaxiService) {}
  // private taxi = new TaxiService();

  ngOnInit(): void {}

  callTaxi() {
    this.taxi.setState('BUSY (occupée)');
    alert('Apelle du taxi');
  }

  showTaxi() {
    alert(this.taxi.getState());
  }
  freeTaxi() {
    alert(this.taxi.setState('FREE (libre)'));
  }
}
