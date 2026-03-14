import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cars',
  standalone: true,
  imports: [],
  templateUrl: './card-cars.component.html',
  styleUrl: './card-cars.component.scss',
})
export class CardCarsComponent {
  @Input() img!: string;
  @Input() name!: string;
  @Input() year!: string;
  @Input() type!: string;
  @Input() engine!: string;
  @Input() size!: string;
}
