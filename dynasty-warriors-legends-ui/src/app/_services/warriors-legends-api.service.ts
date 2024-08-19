import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WarriorsApiEndpoints } from '../_shared/warriors-api-endpoints.enum';
@Injectable({
  providedIn: 'root',

})
export class WarriorsLegendsAPIService {

  private baseURL = "http://localhost:8080/" + WarriorsApiEndpoints.BASE_CONTEXT;

  constructor(private http: HttpClient) { }

  public httpGet(resource : string){ 
    let url = this.baseURL + resource;
    return this.http.get(url + "/");
  }
}
