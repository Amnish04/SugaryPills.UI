import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleSurveyFormComponent } from './lifestyle-survey-form.component';

describe('LifestyleSurveyFormComponent', () => {
  let component: LifestyleSurveyFormComponent;
  let fixture: ComponentFixture<LifestyleSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleSurveyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
