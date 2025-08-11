import { Component, OnInit } from '@angular/core';
import { Api } from '../../core/service/api';
import { ActivatedRoute } from '@angular/router';
import { PlantData } from '../../core/models/plant-detail';

@Component({
  selector: 'app-plant-detail',
  standalone: false,
  templateUrl: './plant-detail.html',
  styleUrl: './plant-detail.css'
})
export class PlantDetail implements OnInit{
  urlParams : string = '';
  plant : PlantData = {
    id_plant: 0,
    name: "",
    taxonomy_class: "",
    genus: "",
    taxonomy_order: "",
    family: "",
    phylum: "",
    kingdom: "",
    description: "",
    image: "",
    access_token: ""
  };

  constructor(private apiService : Api, private route : ActivatedRoute){}

  ngOnInit(){
    this.getPlantDetail();
  }

  getPlantDetail(){
    this.urlParams = this.route.snapshot.paramMap.get('token') || '';    
    let token = this.urlParams.split('-')[0];
    let name = this.urlParams.split('-')[1];

    this.apiService.getPlant(token, name).subscribe((plant:any)=>{  
      this.plant = plant;
    });
  }
}
