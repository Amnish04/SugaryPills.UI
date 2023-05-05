import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports-graphs',
  templateUrl: './reports-graphs.component.html',
  styleUrls: ['./reports-graphs.component.css']
})
export class ReportsGraphsComponent {
    // Pie
    public pieChartOptions: ChartOptions<'pie'> = {
        responsive: false,
    };
    public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
    public pieChartDatasets = [ {
        data: [ 300, 500, 100 ]
    } ];
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor() {
    }
}
