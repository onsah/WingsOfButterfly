import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DevProfilePageComponent} from './dev-profile-page-component';



describe('UserProfileComponent', () => {
  let component: DevProfilePageComponent;
  let fixture: ComponentFixture<DevProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProfilePageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
