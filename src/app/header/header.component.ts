import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Item } from './item';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  // isMenuOpened = false;

  constructor(private menuService: MenuService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Item[]>(`${environment.apiUrl}/menuItems`)
      .subscribe((data) => {
        this.menuService.menuItemsBehaviorSubject.next(data);
      });
  }

  /* toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  } */
}
