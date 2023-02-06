import { Injectable } from '@angular/core';
import { faFilm, faTv, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ItemMovie } from './itemMovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieItemsBehaviorSubject: BehaviorSubject<ItemMovie[]> = new BehaviorSubject<ItemMovie[]>([]);

  constructor() {}
}
