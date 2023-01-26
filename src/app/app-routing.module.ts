import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { IgxCarouselModule, IgxSliderComponent } from 'igniteui-angular';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
