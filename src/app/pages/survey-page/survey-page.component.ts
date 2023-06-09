import { Component, ViewChild } from '@angular/core';
import { SurveyPage } from './survey-utils/enums';
import { IdentificationSurveyFormComponent } from 'src/app/components/survey/identification-survey-form/identification-survey-form.component';
import { LifestyleSurveyFormComponent } from 'src/app/components/survey/lifestyle-survey-form/lifestyle-survey-form.component';
import { SymptomsSurveyFormComponent } from 'src/app/components/survey/symptoms-survey-form/symptoms-survey-form.component';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-survey-page',
    templateUrl: './survey-page.component.html',
    styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent {
    pageNumber = SurveyPage.Identification;
    submitClicked = false;

    // Form Components
    @ViewChild('idForm') idForm: IdentificationSurveyFormComponent;
    @ViewChild('lifestyleForm') lifestyleForm: LifestyleSurveyFormComponent;
    @ViewChild('symptomsForm') symptomsForm: SymptomsSurveyFormComponent;


    constructor(
        private surveyService: SurveyService,
        private snackBar: MatSnackBar,
        private router: Router
    ) { }

    //#region General Getters
    get pageTitle() {
        return "2023 DIA SURVEY";
    }

    get surveyTitle() {
        let title = '';

        switch (this.pageNumber) {
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

    get saveDisabled() {
        return (!this.idForm?.isValid() || !this.lifestyleForm?.isValid() || !this.symptomsForm?.isValid()) || this.submitClicked;
    }

    //#endregion

    onSaveClick() {
        this.submitClicked = true;

        const idFormValue = this.idForm.identityForm?.value;
        const lifestyleFormValue = this.lifestyleForm.lifestyleForm?.value;
        const symptomsFormValue = this.symptomsForm.symptomsForm?.value;

        const payload = {
            identification: idFormValue,
            lifestyle: lifestyleFormValue,
            symptoms: symptomsFormValue
        }

        this.surveyService.addEntry(payload)
            .subscribe((res: any) => {
                console.log(res);
                this.snackBar.open('Successfull saved entry!', 'Done');
                this.router.navigate(['risk'], {
                    queryParams: {
                        riskPoints: res.surveyResult.totalPoint,
                        riskStatus: res.surveyResult.risk,
                        has3Symptoms: res.surveyResult.hasMoreThan3Symptoms,
                    }
                });
                this.submitClicked = false;
            },
                err => {
                    console.error(err);
                    this.submitClicked = false;
                    this.snackBar.open('Error: ' + err.message, 'Oops');
                });
    }
}
