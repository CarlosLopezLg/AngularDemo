import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  baseURL = environment.baseURL;

  index(): Observable<any>{
    const url = this.baseURL + '/index';
    return this.http.get<any>(url);
  }
}
