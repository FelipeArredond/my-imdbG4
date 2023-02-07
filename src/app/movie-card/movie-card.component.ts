import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() name: string = '';
  @Input() link: string = ';'
  @Output() open: EventEmitter<any> = new EventEmitter();

  openModal(){
    this.open.emit(null);
  }

}

