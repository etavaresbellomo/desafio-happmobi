import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarVm } from '../../../../model/logged/car-vm';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getCars(): Observable<CarVm[]> {
    return of([
      {
        name: 'Partner',
        year: '2016',
        type: 'Utilitário',
        engine: '1.6',
        size: '2',
        img: 'assets/images/product/cars/Imagem 31.png'
      },
      {
        name: 'Fiorino',
        year: '2017',
        type: 'Utilitário leve',
        engine: '1.6',
        size: '2',
        img: 'assets/images/product/cars/Imagem 30.png'
      },
      {
        name: 'Doblo',
        year: '2018',
        type: 'Minivan',
        engine: '1.8',
        size: '7',
        img: 'assets/images/product/cars/Imagem 29.png'
      },
      {
        name: 'Toro',
        year: '2016',
        type: 'Picape média',
        engine: '1.6',
        size: '5',
        img: 'assets/images/product/cars/Imagem 25.png'
      },
      {
        name: 'Ford Ká',
        year: '2019',
        type: 'Sedan Compacto',
        engine: '1.0',
        size: '5',
        img: 'assets/images/product/cars/Imagem9.png'
      },
      {
        name: 'Versa',
        year: '2019',
        type: 'Sedan médio',
        engine: '1.4',
        size: '5',
        img: 'assets/images/product/cars/Imagem 27.png'
      },
      {
        name: 'Jetta',
        year: '2021',
        type: 'Sedan grande',
        engine: '2.0',
        size: '5',
        img: 'assets/images/product/cars/Imagem 28.png'
      },
      {
        name: 'Saveiro',
        year: '2018',
        type: 'Picape leve-média',
        engine: '1.6',
        size: '5',
        img: 'assets/images/product/cars/Imagem 23.png'
      },
      {
        name: 'Strada',
        year: '2016',
        type: 'Picape leve',
        engine: '1.4',
        size: '2',
        img: 'assets/images/product/cars/Imagem 22.png'
      },
      {
        name: 'Camaro',
        year: '2017',
        type: 'Coupé',
        engine: '2.0',
        size: '4',
        img: 'assets/images/product/cars/Imagem 20.png'
      },
      {
        name: 'T-Css',
        year: '2020',
        type: 'Cssover',
        engine: '1.6',
        size: '5',
        img: 'assets/images/product/cars/Imagem 18.png'
      },
      {
        name: 'Tiggo 8',
        year: '2021',
        type: 'SUV Grande',
        engine: '2.0',
        size: '7',
        img: 'assets/images/product/cars/Imagem 16.png'
      },
    ]);
  }
}
