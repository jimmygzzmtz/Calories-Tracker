import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogModalPage } from './log-modal.page';

describe('LogModalPage', () => {
  let component: LogModalPage;
  let fixture: ComponentFixture<LogModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
