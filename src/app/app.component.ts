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

  //getHelloWorld2() est une fonction de teste
  // associé à un deuxiéme bouton  hors live pour
  // trouver l'erreurs:
  //   Access to XMLHttpRequest at
  //  'http://localhost:3000/' from origin 'http://localhost:4200'
  //   has been blocked by CORS policy:
  //   Response to preflight request doesn't pass access
  //   control check: No 'Access-Control-Allow-Origin'
  //   header is present on the requested resource.

  getHelloWorld2() {
    const headers = {
      headers: new HttpHeaders({
        'Acces-Controle-Allow-Headers': 'Accepte, Content-Type',
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
