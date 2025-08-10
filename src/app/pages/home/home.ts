import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards : any[] = [{
    title: "Identificación",
    description: "Identifica plantas a través de imágenes de referencia.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg",
    route: "/identification"
  },
  {
    title: "Buscador",
    description: "Busca plantas.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg",
    route: "/browser"
  },
  {
    title: "Identificación",
    description: "Identifica plantas a través de imágenes de referencia.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg"
  },
  {
    title: "Identificación",
    description: "Identifica plantas a través de imágenes de referencia.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg"
  },
  {
    title: "Identificación",
    description: "Identifica plantas a través de imágenes de referencia.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg"
  },
  {
    title: "Identificación",
    description: "Identifica plantas a través de imágenes de referencia.",
    image: "https://thumbs.dreamstime.com/b/peque%C3%B1o-robot-con-lupa-centrada-en-la-investigaci%C3%B3n-y-observaci%C3%B3n-d-ilustraci%C3%B3n-del-que-sostiene-el-foco-de-ampliaci%C3%B3n-sobre-177403888.jpg"
  }];

  constructor(private router : Router){
  }

  navigateTo(route : string){
    this.router.navigate([route])
  }

}
