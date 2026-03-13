import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';
import { CarrosVm } from '../../../api/model/area-logada/carros-vm';
import { InicioService } from '../../../api/module/erp/services/area-logada/inicio.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ImportacaoCompartilhada],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit {
  listaDeCarros = signal<CarrosVm[]>([]);
  private inicioService = inject(InicioService);

  constructor() {
    effect(
      () => {
        this.inicioService.buscarCarros().subscribe((data) => {
          this.listaDeCarros.set(data || []);
        });
      },
      { allowSignalWrites: true },
    );
  }
  ngOnInit(): void {
  }
}
