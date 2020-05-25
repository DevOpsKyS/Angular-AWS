import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular 9 - Funciones Lambda';
  lambda: any = null;
constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('https://bn86do16pc.execute-api.us-east-2.amazonaws.com/default/pythonKYS', httpOptions)
  .toPromise()
      .then(data=>{
        let res = {'results': JSON.stringify(data),
        'json': ()=>{return data;}
      };
        this.lambda = res.results;
      })
      .catch(error => {
        return Promise.reject(error);
      });
}

}

/*
this.httpClient.get('https://bn86do16pc.execute-api.us-east-2.amazonaws.com/default/pythonKYS', httpOptions)
.toPromise()
.then(data=>{
  let res = {'results': JSON.stringify(data),
  'json': ()=>{return data;}
};
 return res; 
})
.catch(error => {
  return Promise.reject(error);
});
*/