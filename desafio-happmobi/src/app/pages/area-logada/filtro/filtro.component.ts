import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';
import { CarrosVm } from '../../../api/model/area-logada/carros-vm';
import { FiltroCarroVm } from '../../../api/interface/area-logada/filtro-carro-vm';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [ImportacaoCompartilhada],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss',
})
export class FiltroComponent implements OnChanges {
  @Input() listCars = new Array<CarrosVm>();
  @Output() filterCancel = new EventEmitter<any>();
  @Output() listSelectedFilter = new EventEmitter<any>();

  listTypeOfBodywork = new Array<any>();
  listTypeEngine = new Array<any>();
  listNumberOfSeats = new Array<any>();
  selectedFilter: FiltroCarroVm = {
    typeOfBodywork: [],
    typeEngine: [],
    numberOfSeats: [],
  };

  ngOnChanges(): void {
    this.separateFilterParameters();
  }

  separateFilterParameters() {
    if (this.listCars) {
      this.listCars.forEach((item: any) => {
        if (!this.listTypeOfBodywork.includes(item.type)) {
          this.listTypeOfBodywork.push(item.type);
        }

        if (!this.listTypeEngine.includes(item.engine)) {
          this.listTypeEngine.push(item.engine);
        }

        if (!this.listNumberOfSeats.includes(item.size)) {
          this.listNumberOfSeats.push(item.size);
        }
      });
    }
  }

  onSelectedFilter(tipo: keyof FiltroCarroVm, value: number, event: any) {
    const checked = event.target.checked;

    if (checked) {
      this.selectedFilter[tipo].push(value);
    } else {
      this.selectedFilter[tipo] = this.selectedFilter[tipo].filter(
        (item) => item !== value,
      );
    }
  }

  cleanFilters() {
    this.selectedFilter = {
      typeOfBodywork: [],
      typeEngine: [],
      numberOfSeats: [],
    };
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = false;
    });
  }

  onFilterCancel() {
    this.cleanFilters();
    this.filterCancel.emit();
  }

  toFilter() {
    this.listSelectedFilter.emit(this.onSelectedFilter);
    this.onFilterCancel();
  }
}
