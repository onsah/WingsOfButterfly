import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CompanyProfileEditPageComponent} from './company-profile-edit-page.component';




describe('UserProfileComponent', () => {
  let component: CompanyProfileEditPageComponent;
  let fixture: ComponentFixture<CompanyProfileEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
