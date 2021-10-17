import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url: string = 'http://localhost:8080/questions';
  constructor(private httpClient: HttpClient) { }

  // get all products
  public getQuestions() {
    return this.httpClient.get(`${this.url}/all`);
  }
}