import { Component } from '@angular/core';
import { Api } from '../../core/service/api';

@Component({
  selector: 'app-identification',
  standalone: false,
  templateUrl: './identification.html',
  styleUrl: './identification.css'
})
export class Identification{
    identifications : any = [];
    imgSrc : string | ArrayBuffer | null = null;

    constructor(private apiService : Api){}

    getIdentification(){
        if(this.imgSrc){
            const value = {
                images: [this.imgSrc],
                latitude: 49.207,
                longitude: 16.608,
                similar_images: true
            }
            this.apiService.postIdentification(value).subscribe((identifications : any)=>{
                this.identifications = identifications
            });
        }
    }

    onFileSelected(event : any){
        const file : File = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=>{
                this.imgSrc = reader.result;
            }
        }
    }
}
