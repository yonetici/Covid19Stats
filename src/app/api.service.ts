import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private PHP_API_SERVER = 'http://coronavirus-19-api.herokuapp.com/';
  public sendGetRequest(value) {
    return this.httpClient.get(this.PHP_API_SERVER + value);
  }

  constructor(private httpClient: HttpClient) { }
}
