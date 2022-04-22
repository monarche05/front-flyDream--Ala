import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxiService {
  state = 'STAND_BY';
  constructor() {}
  getState() {
    return this.state;
  }
  setState(state: string) {
    return (this.state = state);
  }
}
