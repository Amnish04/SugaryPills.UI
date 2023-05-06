import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Report } from 'src/app/models/reports.model';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
    selector: 'app-reports-graphs',
    templateUrl: './reports-graphs.component.html',
    styleUrls: ['./reports-graphs.component.css']
})
export class ReportsGraphsComponent implements OnInit {
    generating = false;
    generatedReports: Report;
    filterForm: FormGroup;

    ngOnInit(): void {
        this.initForm();

        this.initCharts();
    }

    initForm() {
        this.filterForm = this.fb.group({
            question1: [[]],
            question2: [null],
            question3: [null],
            question4: [[]],
            question5: [[]],
        });
    }

    initCharts() {
        this.generateReport();
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

    //#region Pie Chart
    public pieChartOptions: ChartOptions<'pie'> = {
        responsive: false,
    };
    public pieChartLabels = ['MatchedEntries', 'Other Entries'];
    public pieChartDatasets: any;
    public pieChartLegend = true;
    public pieChartPlugins = [];
    //#endregion

    constructor(
        private fb: FormBuilder,
        private reportsService: ReportsService
    ) {
    }

    log(evt: any) {
        console.log(evt);
    }
    
    //#region Bar Chart
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartConfiguration<'bar'>['data'];

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: true,
    };

    //#endregion

    // Driver Function
    generateReport() {
        this.generating = true;

        console.log(this.filterForm.value);
        this.reportsService.generateReports(this.filterForm.value)
            .subscribe(res => {
                console.log(res);
                this.generatedReports = res as Report;
                this.updateCharts();

                this.generating = false;
            },
            err => {
                console.error(err);
                this.generating = false;
        });
    }

    updateCharts() {
        this.updatePieChart();
        this.updateBarGraph();
    }

    updatePieChart() {
        this.pieChartDatasets = [{
            data: [this.generatedReports.count, this.generatedReports.totalCount - this.generatedReports.count]
        }]
    }

    updateBarGraph() {
        this.barChartData = {
            labels: ['Frequent Urination', 'Excessive Thirst', 'Extreme Hunger', 'Fatigue/Weakness', 'Blurred Vision', 'Slow Healing', 'Tingling, Pain or Numbness', 'Dry/Itchy Skin', 'Unexplained Weight Loss', 'Irritability/Mood Changes'],
            datasets: [
                { data: [
                    this.generatedReports.urination.percentage, 
                    this.generatedReports.thirst.percentage,
                    this.generatedReports.hunger.percentage,
                    this.generatedReports.fatigue.percentage,
                    this.generatedReports.blurredVision.percentage,
                    this.generatedReports.weakHealing.percentage,
                    this.generatedReports.tingling.percentage,
                    this.generatedReports.dryIthcySkin.percentage,
                    this.generatedReports.weightLoss.percentage,
                    this.generatedReports.moodChanges.percentage,
                ].map(this.convertDecimalToPercentage), label: 'Percentage Affected' },
            ]
        };
    }

    convertDecimalToPercentage(value: any) {
        return Number(value) * 100;
    }
}
