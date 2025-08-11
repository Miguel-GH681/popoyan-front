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
  token : string = '';
  plant : PlantData = {
    id_plant: 5,
    name: "Cosmos bipinnatus",
    taxonomy_class: "Magnoliopsida",
    genus: "Cosmos",
    taxonomy_order: "Asterales",
    family: "Asteraceae",
    phylum: "Tracheophyta",
    kingdom: "Plantae",
    description: "Cosmos bipinnatus, commonly called the garden cosmos or Mexican aster, is a medium-sized flowering herbaceous plant in the daisy family Asteraceae, native to the Americas. The species and its varieties and cultivars are popular as ornamental plants in temperate climate gardens.",
    image: "https://plant-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/12d/12d9d5fddc27d40393bbd688d749ad7d01ccce8a.jpg",
    access_token: "MlZVZwppE3JXb1ZkAmNjVhl6JkVrWAcyAjRVbRNxVWI-"
  };

  constructor(private apiService : Api, private route : ActivatedRoute){}

  ngOnInit(){
    this.getPlantDetail();
  }

  getPlantDetail(){
    this.token = this.route.snapshot.paramMap.get('token') || '';
    // this.apiService.getPlant(this.token).subscribe((plant:any)=>{  
    //   this.plant = {
    //       id_plant: 5,
    //       name: "Cosmos bipinnatus",
    //       taxonomy_class: "Magnoliopsida",
    //       genus: "Cosmos",
    //       taxonomy_order: "Asterales",
    //       family: "Asteraceae",
    //       phylum: "Tracheophyta",
    //       kingdom: "Plantae",
    //       description: "Cosmos bipinnatus, commonly called the garden cosmos or Mexican aster, is a medium-sized flowering herbaceous plant in the daisy family Asteraceae, native to the Americas. The species and its varieties and cultivars are popular as ornamental plants in temperate climate gardens.",
    //       image: "https://plant-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/12d/12d9d5fddc27d40393bbd688d749ad7d01ccce8a.jpg",
    //       access_token: "MlZVZwppE3JXb1ZkAmNjVhl6JkVrWAcyAjRVbRNxVWI-"
    //   }
    // });
  }
}
