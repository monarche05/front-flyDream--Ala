import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxiService } from './services/taxi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private taxiService: TaxiService) {}

  obsTest() {
    console.log('just before subscribe');
    this.taxiService.getObs().subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }

  // constructor(private httpClient: HttpClient) {}
  // url = environment.url;
  // title = 'front-flyDream';

  // getHelloWorld() {
  //   const headers = {
  //     headers: new HttpHeaders({
  //       'Access-Control-Allow-Origin': '*',
  //     }),
  //   };
  //   const res = this.httpClient.get(environment.url).subscribe((data) => {
  //     const result = JSON.stringify(data);
  //     console.log(typeof data);
  //     console.log(data);
  //   });
  // }
}
