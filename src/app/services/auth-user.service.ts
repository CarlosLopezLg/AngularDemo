import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    const url = this.baseURL + '/login';
    return this.http.post<any>(url, data);
  }
}
