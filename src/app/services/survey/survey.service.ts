import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    surveyApiUrl = environment.surveyApiUrl;

    addEntryUrl = this.surveyApiUrl + 'survey';

    constructor(
        private http: HttpClient
    ) { }

    addEntry(body: any) {
        return this.http.post(this.addEntryUrl, body);
    }

    getListOfEntry() {
        return this.http.get(this.addEntryUrl);
    }
}
