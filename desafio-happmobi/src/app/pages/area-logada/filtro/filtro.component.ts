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
  @Input() listaProdutos = new Array<CarrosVm>();
  @Output() cancelarFiltro = new EventEmitter<any>();
  @Output() listasFiltrosSelecionados = new EventEmitter<any>();


  listaTipoCarroceria = new Array<any>();
  listaTipoMotor = new Array<any>();
  listaQuantidadeLugares = new Array<any>();
  filtroSelecionado: FiltroCarroVm = {
    tipoCarroceria: [],
    tipoMotor: [],
    quantidadeLugares: [],
  };

  ngOnChanges(): void {
    this.separarParametrosFiltros();
  }

  separarParametrosFiltros() {
    if (this.listaProdutos) {
      this.listaProdutos.forEach((item: any) => {
        if (!this.listaTipoCarroceria.includes(item.type)) {
          this.listaTipoCarroceria.push(item.type);
        }

        if (!this.listaTipoMotor.includes(item.engine)) {
          this.listaTipoMotor.push(item.engine);
        }

        if (!this.listaQuantidadeLugares.includes(item.size)) {
          this.listaQuantidadeLugares.push(item.size);
        }
      });
    }
  }

  tipoFiltroSelecionado(tipo: keyof FiltroCarroVm, valor: number, event: any) {
    const checado = event.target.checked;

    if (checado) {
      this.filtroSelecionado[tipo].push(valor);
    } else {
      this.filtroSelecionado[tipo] = this.filtroSelecionado[tipo].filter(
        (item) => item !== valor,
      );
    }
    console.log(this.filtroSelecionado);
  }

  limparFiltros() {
    this.filtroSelecionado = {
      tipoCarroceria: [],
      tipoMotor: [],
      quantidadeLugares: [],
    };
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = false;
    });
  }

  onCancelarFiltro() {
    this.limparFiltros();
    this.cancelarFiltro.emit();
  }

  filtra() {
    this.listasFiltrosSelecionados.emit(this.filtroSelecionado)
    this.onCancelarFiltro()
  }
}
