import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lifestyle-survey-form',
  templateUrl: './lifestyle-survey-form.component.html',
  styleUrls: ['./lifestyle-survey-form.component.css']
})
export class LifestyleSurveyFormComponent {
    lifestyleForm: FormGroup;
    formBreakpoint = 1;
    rowHeight = '7:1';
    
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


            gender: ['', [Validators.required]],
            height: ['', [Validators.required, Validators.min(0), Validators.max(110)]],
            weight: ['', [Validators.required, Validators.min(0), Validators.max(350)]],
            email: ['', [Validators.required, Validators.email]],
            familyHasDiabetes: ['', [Validators.required]],
            isPregnant: ['', [Validators.required]],
        });
    }

    logValues() {
        console.log(this.lifestyleForm.value);
        console.log(this.lifestyleForm.valid);
    }

      
    onResize(event: any) {
        this.formBreakpoint = (event.target.innerWidth <= 600) ? 1 : 1;
        this.rowHeight = (event.target.innerWidth <= 600) ? '5:2' : '5:1';
    }
}
