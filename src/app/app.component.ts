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
      name: 'Transformers 1'
    },{
      name: 'Transformers 2'
    },{
      name: 'Transformers 3'
    },{
      name: 'Transformers 4'
    }
  ];

}
