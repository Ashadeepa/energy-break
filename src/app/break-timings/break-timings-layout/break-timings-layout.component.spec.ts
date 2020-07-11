import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimingsLayoutComponent } from './break-timings-layout.component';

describe('BreakTimingsLayoutComponent', () => {
  let component: BreakTimingsLayoutComponent;
  let fixture: ComponentFixture<BreakTimingsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakTimingsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakTimingsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
