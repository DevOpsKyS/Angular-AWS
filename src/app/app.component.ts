import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 9 - Funciones Lambda';

constructor(private httpClient: HttpClient) { }

lambda = this.httpClient.get('https://bn86do16pc.execute-api.us-east-2.amazonaws.com/default/pythonKYS', httpOptions)
.subscribe (
  response => {
    console.log(response);
  },
  error => {
    console.log(error);
  }
);

}
