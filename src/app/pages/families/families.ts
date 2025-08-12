import { Component, OnInit } from '@angular/core';
import { Api } from '../../core/service/api';
import { Family } from '../../core/models/family';

@Component({
  selector: 'app-families',
  standalone: false,
  templateUrl: './families.html',
  styleUrl: './families.css'
})
export class Families implements OnInit{
  
  families? : Family[];

  constructor(private apiService : Api){}

  ngOnInit() {
    this.getFamilies(); 
  }

  getFamilies(){
    this.apiService.getFamilies().subscribe((families : any)=>{
      this.families = families;
    });
  }
}
