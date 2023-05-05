import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-symptoms-survey-form',
  templateUrl: './symptoms-survey-form.component.html',
  styleUrls: ['./symptoms-survey-form.component.css']
})
export class SymptomsSurveyFormComponent {
    symptomsForm: FormGroup;
    formBreakpoint = 1;
    rowHeight = '4:1';
    
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
        this.formBreakpoint = (event.target.innerWidth <= 600) ? 1 : 1;
        // this.rowHeight = (event.target.innerWidth <= 600) ? '5:2' : '5:1';
    }

    isValid() {
        return this.symptomsForm?.valid;
    }
}
