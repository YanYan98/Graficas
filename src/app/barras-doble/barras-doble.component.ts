import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  proveedoresData: ChartDataSets[] = [
    { 
      data: [ 100,200,300,400,500 ], 
      label: 'Vendedor A', 
      // Color general de las barras
      backgroundColor:'#F57551', 
      // Color al colocar el puntero sobre las barras
      hoverBackgroundColor: '#FA4A46' 
    },
    { data: [ 50,250,30, 450,200 ], 
      label: 'Vendedor B', 
      // Color general de las barras
      backgroundColor:'#FA9146', 
      // Color general de las barras
      hoverBackgroundColor: '#FA4A46' 
    },
  ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartDataSets[] = [
    { 
      data: [ 200, 300,400,300, 100 ], 
      label: 'Carros', 
      backgroundColor: 'blue' },
  ];

}
