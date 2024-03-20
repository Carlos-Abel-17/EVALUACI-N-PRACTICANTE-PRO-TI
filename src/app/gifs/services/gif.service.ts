import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Datum, GIFExpert } from '../interfaces/gif.interfaces';
import { enviroments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  baseUrl= enviroments.BaseURL
  apikey = enviroments.ApiKey
  ListProduct= new EventEmitter<Datum[]>() 
  
  constructor(private http : HttpClient) { }

  getGifs(term:string):Observable<GIFExpert | any >{
    return this.http.get<GIFExpert>(`${this.baseUrl}${this.apikey}&q=${term}`)
    .pipe(
      catchError(()=>of([]))
    )
  }
}
