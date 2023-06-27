import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isMobile } from 'src/app/utilities/helper-functions';

@Component({
  selector: 'app-identification-survey-form',
  templateUrl: './identification-survey-form.component.html',
  styleUrls: ['./identification-survey-form.component.css']
})
export class IdentificationSurveyFormComponent implements OnInit {
    identityForm: FormGroup;
    formBreakpoint = isMobile() ? 1 : 2;
    rowHeight = isMobile() ? '5:2' : '5:1';
    
    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.identityForm = this.fb.group({
            age: ['', [Validators.required, Validators.min(0), Validators.max(150)]], 
            gender: ['', [Validators.required]],
            height: ['', [Validators.required, Validators.min(0), Validators.max(110)]],
            weight: ['', [Validators.required, Validators.min(0), Validators.max(350)]],
            email: ['', [Validators.required, Validators.email]],
            familyHasDiabetes: ['', [Validators.required]],
            isPregnant: ['', [Validators.required]],
        });
    }

    logValues() {
        console.log(this.identityForm.value);
    }

      
    onResize(event: any) {
        this.formBreakpoint = isMobile() ? 1 : 2;
        this.rowHeight = isMobile() ? '5:2' : '5:1';
    }

    onGenderChange(evt: any) {
        if (evt.value === 'Male')
        this.identityForm.get('isPregnant')?.setValue(false);
    }

    isValid() {
        return this.identityForm?.valid;
    }
}
