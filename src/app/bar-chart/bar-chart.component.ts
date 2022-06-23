import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
//plugin de chart.js para aplicar labels
//npm i chartjs-plugin-datalabels@1.0.0
import DataLabelsPlugin from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent{
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // aplicación de labels al chart
    plugins: {
      datalabels:{
        // posición de los labels
        anchor: 'end'
      },
      
    }
  };
  @Input() barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  @Input() barChartData: ChartDataSets[] = [
    { 
      data: [45, 37, 60, 70, 46, 33], 
      label: 'Best Fruits',
      // Color general de las barras
      backgroundColor:'#29C6F5', 
      // Color al colocar el puntero sobre las barras
      hoverBackgroundColor: '#1E79FA'
    }
  ];
}