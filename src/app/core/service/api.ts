import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getChats(){
    return this.http.get(`${this.baseUrl}/chats`);
  }

  getMessages(chatId : number){
    return this.http.get(`${this.baseUrl}/chats/message/${chatId}`);
  }
}
