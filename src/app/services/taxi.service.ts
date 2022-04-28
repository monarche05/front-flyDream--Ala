import { getLocaleNumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getObs(): Observable<any> {
    return new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }
}
