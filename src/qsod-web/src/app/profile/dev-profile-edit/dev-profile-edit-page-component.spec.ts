import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DevProfileEditPageComponent} from './dev-profile-edit-page-component';



describe('UserProfileComponent', () => {
  let component: DevProfileEditPageComponent;
  let fixture: ComponentFixture<DevProfileEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProfileEditPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProfileEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
