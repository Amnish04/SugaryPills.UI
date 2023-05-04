import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsSurveyFormComponent } from './symptoms-survey-form.component';

describe('SymptomsSurveyFormComponent', () => {
  let component: SymptomsSurveyFormComponent;
  let fixture: ComponentFixture<SymptomsSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsSurveyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymptomsSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
