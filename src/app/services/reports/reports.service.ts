import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {
    reportsEndpoint = environment.surveyApiUrl + 'report';
    emptyFilter = {
        question1: [],
        question2: null,
        question3: null,
        question4: [],
        question5: [],
    }

    constructor(
        private http: HttpClient
    ) { }

    generateReports(filter: any = this.emptyFilter) {
        return this.http.post(this.reportsEndpoint, filter);
    }
}
