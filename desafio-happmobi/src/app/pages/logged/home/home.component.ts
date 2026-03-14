import { Component, effect, inject, signal } from '@angular/core';
import { CarVm } from '../../../api/model/logged/car-vm';
import { HomeService } from '../../../api/module/erp/services/logged/home.service';
import { FilterComponent } from '../filter/filter.component';
import { FilterCarVm } from '../../../api/interface/logged/filter-car-vm';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FilterComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);

  carList = signal<CarVm[]>([]);
  showFilter: boolean = false;

  constructor() {
    effect(
      () => {
        this.homeService.getCars().subscribe((data) => {
          this.carList.set(data || []);
        });
      },
      { allowSignalWrites: true },
    );
  }

  showFilterComponent() {
    this.showFilter = true;
  }

  showFilteredList(list: FilterCarVm) {
    console.log(list);
  }
}
