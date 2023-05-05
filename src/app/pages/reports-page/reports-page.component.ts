import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent {
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
