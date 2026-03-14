import { Component, effect, inject, signal } from '@angular/core';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';
import { CarrosVm } from '../../../api/model/area-logada/carros-vm';
import { InicioService } from '../../../api/module/erp/services/area-logada/inicio.service';
import { FiltroComponent } from '../filtro/filtro.component';
import { FiltroCarroVm } from '../../../api/interface/area-logada/filtro-carro-vm';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ImportacaoCompartilhada, FiltroComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  private inicioService = inject(InicioService);
  listaCarros = signal<CarrosVm[]>([]);
  mostrarFiltro: boolean = false;

  constructor() {
    effect(
      () => {
        this.inicioService.buscarCarros().subscribe((data) => {
          this.listaCarros.set(data || []);
        });
      },
      { allowSignalWrites: true },
    );
  }

  mostrarComponenteFiltro() {
    this.mostrarFiltro = true;
  }

  mostrarListaFiltrada(lista:FiltroCarroVm){
    console.log(lista)
  }
}
