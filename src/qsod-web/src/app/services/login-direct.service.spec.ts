import { TestBed } from '@angular/core/testing';

import { LoginDirectService } from './login-direct.service';

describe('LoginDirectService', () => {
  let service: LoginDirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
