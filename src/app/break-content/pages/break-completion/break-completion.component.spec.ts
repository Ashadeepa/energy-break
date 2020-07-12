import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakCompletionComponent } from './break-completion.component';

describe('BreakCompletionComponent', () => {
  let component: BreakCompletionComponent;
  let fixture: ComponentFixture<BreakCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
