import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakContentHomeComponent } from './break-content-home.component';

describe('BreakContentHomeComponent', () => {
  let component: BreakContentHomeComponent;
  let fixture: ComponentFixture<BreakContentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakContentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
