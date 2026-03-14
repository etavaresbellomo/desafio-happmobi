import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CarVm } from '../../../api/model/logged/car-vm';
import { FilterCarVm } from '../../../api/interface/logged/filter-car-vm';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnChanges {
  @Input() listCars = new Array<CarVm>();
  @Output() filterCancel = new EventEmitter<any>();
  @Output() listSelectedFilter = new EventEmitter<any>();

  listTypeOfBodywork = new Array<any>();
  listTypeEngine = new Array<any>();
  listNumberOfSeats = new Array<any>();
  selectedFilter: FilterCarVm = {
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

  onSelectedFilter(tipo: keyof FilterCarVm, value: number, event: any) {
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
