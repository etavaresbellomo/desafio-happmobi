import { Component } from '@angular/core';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ImportacaoCompartilhada],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
