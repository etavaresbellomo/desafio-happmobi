import { Component, effect, inject, signal } from '@angular/core';
import { CarrosVm } from '../../../api/model/area-logada/carros-vm';
import { InicioService } from '../../../api/module/erp/services/area-logada/inicio.service';
import { FiltroComponent } from '../filtro/filtro.component';
import { FiltroCarroVm } from '../../../api/interface/area-logada/filtro-carro-vm';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ FiltroComponent, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  private homeService = inject(InicioService);

  carList = signal<CarrosVm[]>([]);
  showFilter: boolean = false;

  constructor() {
    effect(
      () => {
        this.homeService.buscarCarros().subscribe((data) => {
          this.carList.set(data || []);
        });
      },
      { allowSignalWrites: true },
    );
  }

  showFilterComponent() {
    this.showFilter = true;
  }

  showFilteredList(list: FiltroCarroVm) {
    console.log(list);
  }
}
