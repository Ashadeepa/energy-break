import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakHomeComponent } from './break-home.component';

describe('BreakHomeComponent', () => {
  let component: BreakHomeComponent;
  let fixture: ComponentFixture<BreakHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
