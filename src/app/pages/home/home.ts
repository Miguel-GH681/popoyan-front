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
    image: "https://img.freepik.com/vector-premium/robot-jardinero-pala-planta-su-mano-ilustracion_124715-170.jpg",
    route: "/identification"
  },
  {
    title: "Buscador",
    description: "Busca plantas desconocidas y descubre información interesante.",
    image: "https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-cute-robot-watering-plant-clipart-illustration-png-image_14687655.png",
    route: "/browser"
  },
  {
    title: "Familias",
    description: "Observa las familias de plantas que has estado buscando.",
    image: "https://static.vecteezy.com/system/resources/previews/002/298/758/non_2x/a-potted-houseplant-in-a-flat-cartoon-style-an-element-for-decorating-your-home-room-or-office-illustration-isolated-on-a-white-background-vector.jpg",
    route: "/families"
  },
  {
    title: "Chatbot",
    description: "Habla con nuestro robot sobre cualquier duda de plantas que tengas.",
    image: "https://st3.depositphotos.com/18024562/34601/v/450/depositphotos_346018078-stock-illustration-smilling-chat-bot-idea-lamp.jpg",
    route: "/plant-bot"
  },
  {
    title: "Estadísticas",
    description: "Conoce el uso de la aplicación a través de gráficos",
    image: "https://img.freepik.com/vector-premium/icono-diseno-editable-soporte-robotico_362714-814.jpg",
    route: "statistics"
  }];

  constructor(private router : Router){
  }

  navigateTo(route : string){
    this.router.navigate([route])
  }

}
