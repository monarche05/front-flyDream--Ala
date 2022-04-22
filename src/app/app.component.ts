import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}
  url = environment.url;
  title = 'front-flyDream';

  getHelloWorld() {
    const headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    };
    const res = this.httpClient
      .get(environment.url, headers)
      .subscribe((data) => {
        alert(data);
      });
  }
  getHelloWorld2() {
    const headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methodes': 'GET ,POST , PUT, DELETE, OPTIONS',
      }),
    };

    const res = this.httpClient
      .get(environment.url, headers)
      .subscribe((data) => {
        alert(data);
      });
  }
}
