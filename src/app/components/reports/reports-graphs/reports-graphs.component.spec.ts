import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGraphsComponent } from './reports-graphs.component';

describe('ReportsGraphsComponent', () => {
  let component: ReportsGraphsComponent;
  let fixture: ComponentFixture<ReportsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
