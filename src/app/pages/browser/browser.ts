import { Component } from '@angular/core';
import { Api } from '../../core/service/api';
import { Plant } from '../../core/models/plant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  standalone: false,
  templateUrl: './browser.html',
  styleUrl: './browser.css'
})
export class Browser {
  plantsCollection : Plant[] = [];
  paginatedPlants: Plant[] = [];
  keyword : string = '';
  currentPage : number = 1;
  itemsPerPage : number = 10;

  constructor(private apiService : Api, private router : Router){}

  getPlants(){
    if(this.keyword != ''){
      this.apiService.getPlants(this.keyword).subscribe((res:any) =>{
        this.plantsCollection = res;
        this.paginatedPlants = this.plantsCollection.slice(0, this.itemsPerPage);
      }, err =>{
        console.log({err});
      });
    }
  }

  get getTotalPages(){
    return Math.ceil(this.plantsCollection.length / this.itemsPerPage);
  }

  changePage(newPage : number){
    if(newPage >= 1 && newPage <= this.getTotalPages){
      const start = (newPage - 1) * this.itemsPerPage;
      this.paginatedPlants = this.plantsCollection.slice(start, start + this.itemsPerPage);
      this.currentPage = newPage;
    }
  }

  navigateTo(i : number){
    this.router.navigate(['/detail', this.plantsCollection[i].access_token + encodeURIComponent(this.plantsCollection[i].name)]);
  }
}
