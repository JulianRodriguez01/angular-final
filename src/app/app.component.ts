import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autor:any = null;
  date:any = null;
  status:any = null;
  hostname: any = null;
  fecha: any = null;
  host: any = null;
  fecha2: any = null;
  host2: any = null;
  datos: any = null;
  datos2: any = null;
  name: any = null;
  code: any = null;
  sum: any = null;
  count: any = null;
  url: string = '';
  url2: string = '';
  autor2: any = null;
  status2: any = null;
  urlServer: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.autor = "201910597 Nicolas Gil";
    

    this.url = `http://${window.location.hostname}:30007/`;
    this.http.get<any>(this.url).subscribe(data => {
      this.datos = data;
      this.host = this.datos.hostName;
      this.name = this.datos.name;
      this.code = this.datos.code;
      this.sum = this.datos.sum;
      this.count = this.datos.count;
      this.fecha = new Date(this.datos.dateAndtime.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));;
    });
    this.url2 = `http://${window.location.hostname}:30008/`;
    this.http.get<any>(this.url2).subscribe(data2 => {
      this.datos2 = data2;
      this.autor2 = data2.autor;
      this.status2 = data2.state;
      this.host2 = this.datos2.hostName;
      this.fecha2 = new Date(this.datos2.dateAndtime.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));;
    });
  }
}