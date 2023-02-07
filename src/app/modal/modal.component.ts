import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  title = 'PrimeraApp';
  titleMovie=`Avatar: El Camino del Agua`;

  @Output() close: EventEmitter<any> = new EventEmitter();

  closeModal(){
    this.close.emit(null);
  }

}
