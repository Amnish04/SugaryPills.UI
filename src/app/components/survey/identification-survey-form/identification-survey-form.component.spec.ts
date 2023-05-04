import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationSurveyFormComponent } from './identification-survey-form.component';

describe('IdentificationSurveyFormComponent', () => {
  let component: IdentificationSurveyFormComponent;
  let fixture: ComponentFixture<IdentificationSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationSurveyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificationSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
