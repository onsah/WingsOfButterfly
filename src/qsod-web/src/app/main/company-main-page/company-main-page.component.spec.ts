import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMainPageComponent } from './company-main-page.component';

describe('CompanyMainPageComponent', () => {
  let component: CompanyMainPageComponent;
  let fixture: ComponentFixture<CompanyMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
