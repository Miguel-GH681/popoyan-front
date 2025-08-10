import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000/api/plants';

  constructor(private http : HttpClient){}

  getPlants(keyword : string){
    let params = new HttpParams();
    params = params.set('keyword', keyword);

    return this.http.get(`${this.baseUrl}/plants`, {params});
  }
}
