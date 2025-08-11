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
    icon: "search",
    route: "/identification"
  },
  {
    title: "Buscador",
    description: "Busca plantas desconocidas y descubre información interesante.",
    icon: "contacts",
    route: "/browser"
  },
  {
    title: "Familias",
    description: "Observa las familias de plantas que has estado buscando.",
    icon: "grass",
    route: "/families"
  },
  {
    title: "Chatbot",
    description: "Habla con nuestro robot sobre cualquier duda de plantas que tengas.",
    icon: "chat",
    route: "/plant-bot"
  },
  {
    title: "Estadísticas",
    description: "Conoce el uso de la aplicación a través de gráficos",
    icon: "equalizer",
    route: "statistics"
  }];

  constructor(private router : Router){
  }

  navigateTo(route : string){
    this.router.navigate([route])
  }

}
