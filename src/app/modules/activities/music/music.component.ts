import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  @Input() name!: string;
  @Input() adr!: string;
  @Input() eventDate!: string;

  constructor() {}

  ngOnInit(): void {}
}
