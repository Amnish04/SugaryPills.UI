import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {
    reportsEndpoint = environment.surveyApiUrl + 'report';
    emptyFilter = {
        lifestyles: {
            question1: null,
            question2: null,
            question3: null,
            question4: null,
            question5: null,
        }
    }

    constructor(
        private http: HttpClient
    ) { }

    generateReports(filter: any = this.emptyFilter) {
        return this.http.post(this.reportsEndpoint, filter);
    }
}
