import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CompanyProfilePageComponent} from './company-profile-page.component';

describe('UserProfileComponent', () => {
  let component: CompanyProfilePageComponent;
  let fixture: ComponentFixture<CompanyProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfilePageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
