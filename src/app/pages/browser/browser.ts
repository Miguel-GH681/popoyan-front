import { Component } from '@angular/core';
import { Api } from '../../core/service/api';
import { Plant } from '../../core/models/plant';

@Component({
  selector: 'app-browser',
  standalone: false,
  templateUrl: './browser.html',
  styleUrl: './browser.css'
})
export class Browser {
  plants : Plant[] = [];
  keyword : string = '';

  constructor(private apiService : Api){}

  getPlants(){
    if(this.keyword != ''){
      this.apiService.getPlants(this.keyword).subscribe((res:any) =>{
        this.plants = res;
      }, err =>{
        console.log({err});
      });
    }
  }
}
