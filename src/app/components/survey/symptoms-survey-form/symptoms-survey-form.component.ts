import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isMobile } from 'src/app/utilities/helper-functions';

@Component({
  selector: 'app-symptoms-survey-form',
  templateUrl: './symptoms-survey-form.component.html',
  styleUrls: ['./symptoms-survey-form.component.css']
})
export class SymptomsSurveyFormComponent {
    symptomsForm: FormGroup;
    formBreakpoint = 1;
    rowHeight = isMobile() ? '2:1' : '5:1';

    tileRowSpan = isMobile() ? 4 : 1;
    
    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.symptomsForm = this.fb.group({
            urination: [null],
            thirst:[null],
            hunger: [null],
            fatigue: [null],
            blurred: [null],
            slowhealing: [null],
            tingling: [null],
            dry: [null],
            weightChange: [null],
            moodChanges: [null]

        });
    }

    // formatFormToPayload(formValues: any) {
    //     let payload = JSON.parse(JSON.stringify(formValues));

    //     payload.question2 = (Question2OptionsMapping as any)[payload.question2];
    //     payload.question3 = (Question3OptionsMapping as any)[payload.question3];

    //     return payload;
    // }

    logValues() {
        console.log(this.symptomsForm.value);
        console.log(this.symptomsForm.valid);
    }

      
    onResize(event: any) {
        this.rowHeight = isMobile() ? '2:1' : '5:1';
        this.tileRowSpan = isMobile() ? 4 : 1;;
    }

    isValid() {
        return this.symptomsForm?.valid;
    }
}
