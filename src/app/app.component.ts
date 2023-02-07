import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieService } from './movie.service';
import { ItemMovie } from './itemMovie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mainTittle = 'Favoritos de los aficionados'
  mainText = 'Los mejores programas de TV y peliculas de esta semana'

  isModalOpen = false;
 

  title = 'my-imdb';

  items: ItemMovie[] = [];


  carousel: ItemMovie[] = [];

  constructor(private movieService: MovieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ItemMovie[]>(`${environment.apiUrl}/movies`)
      .subscribe((data) => {
        data.forEach((e:any, i:number)=>{
          e.index = i;
        })
        this.movieService.movieItemsBehaviorSubject.next(data);
        this.items = data
        this.carousel = data.slice(0,6)
      });
  }


  handleNext(){
    this.carousel.splice(0,1);
    if(this.carousel[this.carousel.length-1].index == this.items[this.items.length-1].index ){
      this.carousel.push(this.items[0]);
    }else{
      this.carousel.push(this.items[this.carousel[this.carousel.length-1].index+1]);
    }
  }

  handleModal(){
    this.isModalOpen = !this.isModalOpen;
  }

}
