import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-reports-graphs',
  templateUrl: './reports-graphs.component.html',
  styleUrls: ['./reports-graphs.component.css']
})
export class ReportsGraphsComponent implements OnInit {
    generating = false;

    filterForm: FormGroup;

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.filterForm = this.fb.group({
            question1: [null],
            question2: [null],
            question3: [null],
            question4: [null],
            question5: [null],
        });
    }
    
    //#region Options
    stapleDietOptions = [
        {
            label: 'White Bread',
            value: 'bread'
        }, 
        {
            label: 'Sugar',
            value: 'sugar'
        },
        {
            label: 'Salt',
            value: 'salt'
        },
        {
            label: 'Flour',
            value: 'flour'
        } 
    ];
    junkFoodOptions = [
        {
            label: 'Once a week',
            value: 'once'
        }, 
        {
            label: '2-5 times a week',
            value: 'sometimes'
        },
        {
            label: 'Everyday',
            value: 'everyday'
        }
    ];
    medicalCheckupOptions = [
        {
            label: 'Once a month',
            value: 'month'
        },
        {
            label: 'Once a quarter',
            value: 'quarter'
        },
        {
            label: 'Once a year',
            value: 'year'
        }
    ];
    environmentOptions = [
        {
            label: 'Air Pollution',
            value: 'airPollution'
        }, 
        {
            label: 'Water Pollution',
            value: 'waterPollution'
        },
        {
            label: 'Exposure to toxins',
            value: 'toxins'
        }
    ];
    stressOptions = [
        {
            label: 'Historical Trauma',
            value: 'trauma'
        },
        {
            label: 'Financial Issues',
            value: 'finances'
        },
        {
            label: 'Other Reasons',
            value: 'other'
        }
    ];
    //#endregion

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

    constructor(
        private fb: FormBuilder,
        private reportsService: ReportsService
    ) {
    }

    log(evt: any) {
        console.log(evt);
    }

    // Driver Function
    generateReport() {
        this.generating = true;

        console.log(this.filterForm.value);
        this.reportsService.generateReports()
        .subscribe(res =>{
            console.log(res);
            this.generating = false;
        },
        err => {
            console.error(err);
            this.generating = false;
        });
    }
}
