import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaisesServices{

  public url: string;
  

  constructor(
    public http: Http
  ){
    this.url = "https://restcountries.eu/rest/v2/all";
  }

  public obtenerPaises():Observable<any>{

    return this.http.get(this.url);

  }

}

