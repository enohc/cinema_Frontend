import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucuralComponent } from './sucural.component';

describe('SucuralComponent', () => {
  let component: SucuralComponent;
  let fixture: ComponentFixture<SucuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
