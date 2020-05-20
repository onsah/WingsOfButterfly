import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMainPageComponent } from './dev-main-page.component';

describe('DevMainPageComponent', () => {
  let component: DevMainPageComponent;
  let fixture: ComponentFixture<DevMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
