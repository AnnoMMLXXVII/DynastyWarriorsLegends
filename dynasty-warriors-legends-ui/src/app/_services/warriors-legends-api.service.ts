import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WARRIORS_SERVICES_API_HOST, WarriorsApiEndpoints } from '../_shared/warriors-api-endpoints';
@Injectable({
  providedIn: 'root',

})
export class WarriorsLegendsAPIService {

  private baseURL = "https://" + WARRIORS_SERVICES_API_HOST + "/" + WarriorsApiEndpoints.BASE_CONTEXT;

  constructor(private http: HttpClient) { }

  public httpGet(resource: string) {
    let url = this.baseURL + resource;
    console.log(url);
    return this.http.get(url + "/");
  }

  public httpGetImageUrl(imageUrl: string) {
    return this.http.get(imageUrl, { responseType: 'blob' }).subscribe(
      (e) => { return URL.createObjectURL(e) }
    );
  }
}
