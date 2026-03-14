import { Component, Input } from '@angular/core';
import { CardCarsComponent } from '../card-cars/card-cars.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardCarsComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
@Input() carList:any
}
