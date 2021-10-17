import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/users';
  constructor(private httpClient: HttpClient) { }

  //Login
  public logIn(user:any) {
    return this.httpClient.post(`${this.url}/login`, user);
  }

  //Registe
  public addUser(user:any) {
    return this.httpClient.post(`${this.url}/add`, user);
  }
}
