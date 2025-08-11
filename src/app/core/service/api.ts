import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http : HttpClient){}

  getPlants(keyword : string){
    let params = new HttpParams();
    params = params.set('keyword', keyword);

    return this.http.get(`${this.baseUrl}/plants/plants`, {params});
  }

  postIdentification(value : any){
    return this.http.post(`${this.baseUrl}/plants`, value);
  }

  getChats(){
    return this.http.get(`${this.baseUrl}/chats`);
  }

  getMessages(idChat : number){
    return this.http.get(`${this.baseUrl}/chats/message/${idChat}`);
  }

  postMessage(value : Message){
    return this.http.post(`${this.baseUrl}/chats/message`, value);
  }

  getStatistics(){
    return this.http.get(`${this.baseUrl}/statistics`);
  }
}
