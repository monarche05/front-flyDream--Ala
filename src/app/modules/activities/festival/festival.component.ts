import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css'],
})
export class FestivalComponent implements OnInit {
  @Input() name!: string;
  @Input() adr!: string;
  @Input() eventDate!: string;
  constructor() {}

  ngOnInit(): void {}
}
