import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {

  isLogged: boolean = true;
  isLoading: boolean = false;

  constructor() { }

  setIsLogged(data: boolean){
    this.isLogged = data;
  }

  setIsLoading(data: boolean){
    this.isLoading = data;
  }
}
