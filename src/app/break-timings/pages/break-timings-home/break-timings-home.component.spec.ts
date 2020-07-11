import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimingsHomeComponent } from './break-timings-home.component';

describe('BreakTimingsHomeComponent', () => {
  let component: BreakTimingsHomeComponent;
  let fixture: ComponentFixture<BreakTimingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakTimingsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakTimingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
