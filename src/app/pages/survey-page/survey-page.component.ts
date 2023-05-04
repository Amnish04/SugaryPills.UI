import { Component } from '@angular/core';
import { SurveyPage } from './survey-utils/enums';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent {
    pageNumber = SurveyPage.Identification;

    //#region General Getters
    get pageTitle() {
        return "2023 DIA SURVEY";
    }

    get surveyTitle() {
        let title = '';

        switch(this.pageNumber) {
            case SurveyPage.Identification:
                title = 'Personal Questions';
                break;
            case SurveyPage.Lifestyle:
                title = 'Lifestyle Questions';
                break;
            case SurveyPage.Symptoms:
                title = 'Symptoms Questions';
                break;
        }

        return title;
    }

    get showSubmit() {
        return this.pageNumber === SurveyPage.Symptoms;
    }

    //#endregion

    //#region Pagination
    nextClicked() {
        ++this.pageNumber;
    }

    previousClicked() {
        --this.pageNumber;
    }

    get prevDisabled() {
        return this.pageNumber === SurveyPage.Identification;
    }

    get nextDisabled() {
        return this.pageNumber === SurveyPage.Symptoms;
    }

    //#endregion
}
