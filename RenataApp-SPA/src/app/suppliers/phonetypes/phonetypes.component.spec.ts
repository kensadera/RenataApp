/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhonetypesComponent } from './phonetypes.component';

describe('PhonetypesComponent', () => {
  let component: PhonetypesComponent;
  let fixture: ComponentFixture<PhonetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
