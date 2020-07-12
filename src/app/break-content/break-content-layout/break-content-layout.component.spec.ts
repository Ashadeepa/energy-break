import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakContentLayoutComponent } from './break-content-layout.component';

describe('BreakContentLayoutComponent', () => {
  let component: BreakContentLayoutComponent;
  let fixture: ComponentFixture<BreakContentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakContentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
