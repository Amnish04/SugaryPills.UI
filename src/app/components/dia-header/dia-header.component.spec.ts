import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaHeaderComponent } from './dia-header.component';

describe('DiaHeaderComponent', () => {
  let component: DiaHeaderComponent;
  let fixture: ComponentFixture<DiaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
