import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessPageComponent } from './awareness-page.component';

describe('AwarenessPageComponent', () => {
  let component: AwarenessPageComponent;
  let fixture: ComponentFixture<AwarenessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwarenessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarenessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
