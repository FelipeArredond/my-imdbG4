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
      name: 'Transformers 0'
    },{
      index: 1,
      name: 'Transformers 1'
    },{
      index: 2,
      name: 'Transformers 2'
    },{
      index: 3,
      name: 'Transformers 3'
    },{
      index: 4,
      name: 'Transformers 4'
    },{
      index: 5,
      name: 'Transformers 5'
    },{
      index: 6,
      name: 'Transformers 6'
    },{
      index: 7,
      name: 'Transformers 7'
    },
    {
      index: 8,
      name: 'Transformers 8'
    },
    {
      index: 9,
      name: 'Transformers 9'
    }
  ];

  carousel = [
  {
    index: 0,
    name: 'Transformers 0'
  },{
    index: 1,
    name: 'Transformers 1'
  },{
    index: 2,
    name: 'Transformers 2'
  },{
    index: 3,
    name: 'Transformers 3'
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
