import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification-survey-form',
  templateUrl: './identification-survey-form.component.html',
  styleUrls: ['./identification-survey-form.component.css']
})
export class IdentificationSurveyFormComponent implements OnInit {
    identityForm: FormGroup;
    
    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.identityForm = this.fb.group({
            firstName: ['', Validators.required], 
            lastName: ['', Validators.required], 
        });
    }
}
