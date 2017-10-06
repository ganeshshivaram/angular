import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWarningAlertComponent } from './app-warning-alert.component';

describe('AppWarningAlertComponent', () => {
  let component: AppWarningAlertComponent;
  let fixture: ComponentFixture<AppWarningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWarningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
