import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question2OptionsMapping, Question3OptionsMapping } from 'src/app/models/survey.model';
import { isMobile } from 'src/app/utilities/helper-functions';

@Component({
  selector: 'app-lifestyle-survey-form',
  templateUrl: './lifestyle-survey-form.component.html',
  styleUrls: ['./lifestyle-survey-form.component.css']
})
export class LifestyleSurveyFormComponent {
    lifestyleForm: FormGroup;
    formBreakpoint = 1;
    rowHeight = isMobile() ? '5:2' : '7:1';

    rowSpan = isMobile() ? 2 : 1;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.lifestyleForm = this.fb.group({
            // Devil Fruits
            question1: this.fb.group({
                bread: [null],
                sugar: [null],
                salt: [null],
                flour: [null],
                // none: [null],
            }),
            question2: ['', [Validators.required]],
            question3: ['', [Validators.required]],
            question4: this.fb.group({
                airPollution: [null],
                waterPollution: [null],
                toxins: [null],
            }),
            question5: this.fb.group({
                trauma: [null],
                finances: [null],
                other: [null],
            }),
        });
    }

    formatFormToPayload(formValues: any) {
        let payload = JSON.parse(JSON.stringify(formValues));

        payload.question2 = (Question2OptionsMapping as any)[payload.question2];
        payload.question3 = (Question3OptionsMapping as any)[payload.question3];

        return payload;
    }

    getFormattedPayload() {
        return this.formatFormToPayload(this.lifestyleForm.value);
    }

    logValues() {
        console.log(this.formatFormToPayload(this.lifestyleForm.value));
        console.log(this.lifestyleForm.valid);
    }

      
    onResize(event: any) {
        this.formBreakpoint = (event.target.innerWidth <= 600) ? 1 : 1;
        this.rowHeight = (event.target.innerWidth <= 600) ? '5:2' : '5:1';
    }

    isValid() {
        return this.lifestyleForm?.valid;
    }
}
