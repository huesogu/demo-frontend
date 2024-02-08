import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class GettodosService {
  private url = 'http://localhost:3000/todos';
   
  constructor(private httpClient: HttpClient) { }
  
  getTodos(){
    return this.httpClient.get(this.url);
  }
  
}