import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lifestyle-survey-form',
  templateUrl: './lifestyle-survey-form.component.html',
  styleUrls: ['./lifestyle-survey-form.component.css']
})
export class LifestyleSurveyFormComponent {
    identityForm: FormGroup;
    formBreakpoint = 2;
    rowHeight = '5:1';
    
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
        this.formBreakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
        this.rowHeight = (event.target.innerWidth <= 600) ? '5:2' : '5:1';
    }
}
