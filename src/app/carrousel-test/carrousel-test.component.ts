import { Component } from '@angular/core';
import { IgxCarouselComponent} from 'igniteui-angular';
import { IgxSliderComponent} from 'igniteui-angular';

@Component({
  selector: 'app-carrousel-test',
  templateUrl: './carrousel-test.component.html',
  styleUrls: ['./carrousel-test.component.css']
})
export class CarrouselTestComponent {
  public slides = [
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png'
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png'
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png'
    }
  ];
}
