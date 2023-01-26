import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-imdb';

  items = [
    {
      index: 0,
      link: 'https://pics.filmaffinity.com/la_vendedora_de_rosas-407417805-large.jpg',
      name: 'La vendedora de rosas'
    },
    {
      index: 1,
      link: 'https://pics.filmaffinity.com/el_abrazo_de_la_serpiente-385873306-large.jpg',
      name: 'El abrazo de la serpiente'
    },
    {
      index: 2,
      link: 'https://rtvcplay-v2.s3-accelerate.amazonaws.com/s3fs-public/field/image/video/Confesion-Laura-Trailer.jpg',
      name: 'Confesión a Laura'
    },
    {
      index: 3,
      link: 'https://www.proimagenescolombia.com/photos/57150_888_imagen__.jpg',
      name: 'María, llena eres de gracia'
    },
    {
      index: 4,
      link: 'https://www.proimagenescolombia.com/photos/57150_3331_imagen__.jpg',
      name: 'La tierra y la sombra'
    },
    {
      index: 5,
      link: 'https://rtvcplay-v2.s3-accelerate.amazonaws.com/s3fs-public/styles/originales/public/field/image/video/Cap-Rodrigo-D_0.jpg',
      name: 'Rodrigo D no futuro'
    },
    {
      index: 6,
      link: 'https://www.proimagenescolombia.com/photos/57150_5968_imagen__.jpg',
      name: 'Agarrando pueblo'
    },
    {
      index: 7,
      link: 'https://elpilon.com.co/wp-content/uploads/2022/01/El-viaje-1-CORTESIA.jpg',
      name: 'Los viajes del viento'
    },
    {
      index: 8,
      link: 'https://www.proimagenescolombia.com/photos/57150_342_imagen__.jpg',
      name: 'Mi abuelo, mi papá y yo'
    }
  ]


  carousel = [
    {
      index: 0,
      link: 'https://pics.filmaffinity.com/la_vendedora_de_rosas-407417805-large.jpg',
      name: 'La vendedora de rosas'
    },
    {
      index: 1,
      link: 'https://pics.filmaffinity.com/el_abrazo_de_la_serpiente-385873306-large.jpg',
      name: 'El abrazo de la serpiente'
    },
    {
      index: 2,
      link: 'https://rtvcplay-v2.s3-accelerate.amazonaws.com/s3fs-public/field/image/video/Confesion-Laura-Trailer.jpg',
      name: 'Confesión a Laura'
    },
    {
      index: 3,
      link: 'https://www.proimagenescolombia.com/photos/57150_888_imagen__.jpg',
      name: 'María, llena eres de gracia'
    }
  ]

  handleNext(){
    this.carousel.splice(0,1);
    if(this.carousel[this.carousel.length-1].index == this.items[this.items.length-1].index ){
      this.carousel.push(this.items[0]);
    }else{
      this.carousel.push(this.items[this.carousel[this.carousel.length-1].index+1]);
    }
    console.log(this.carousel)
  }

}
