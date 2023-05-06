import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-risk-page',
    templateUrl: './risk-page.component.html',
    styleUrls: ['./risk-page.component.css']
})
export class RiskPageComponent implements OnInit {
    riskPoints: any;
    riskStatus: any;
    has3Symptoms: any;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.riskPoints = (this.activatedRoute.snapshot.queryParams as any).riskPoints ?? 'Not calculated yet';
        this.riskStatus = this.capitalize((this.activatedRoute.snapshot.queryParams as any).riskStatus) ?? 'Nothing to show yet!';
        this.has3Symptoms = (this.activatedRoute.snapshot.queryParams as any).has3Symptoms ?? "Unknown";
    }

    capitalize(val: string) {
        return val[0].toUpperCase() + val.slice(1);
    }
}
