import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakLayoutComponent } from './break-layout.component';

describe('BreakLayoutComponent', () => {
  let component: BreakLayoutComponent;
  let fixture: ComponentFixture<BreakLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
