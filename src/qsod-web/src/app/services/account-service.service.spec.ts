import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { LoginResult, LoginError } from '../interfaces/IAccountService';
import { User, UserType } from '../models/user';
import { HttpClientModule } from '@angular/common/http';

describe('AccountServiceService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(AccountService);
  });

  /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */

  it('login fail json test', () => {
    let json = 
    `
      {
        "tag": "error",
        "error": "EmailAlreadyTaken"
      }
    `;

    let result: LoginResult = JSON.parse(json);

    if (result.tag === "error") {
      expect(result.error == LoginError.EmailAlreadyTaken);
    } else {
      fail();
    }
  });

  it('login success json test', () => {
    let json = 
    ` 
      {
        "tag": "value",
        "value": {
          "email": "onur.sahin@ug.bilkent.edu.tr",
          "password": "nice try bro",
          "type": "Developer"
        }
      }
    `;

    let result: LoginResult = JSON.parse(json);
    
    if (result.tag === "value") {
      let user: User = result.value;
      
      expect(user.email === "onur.sahin@ug.bilkent.edu.tr");
      expect(user.password === "nice try bro");
      expect(user.type === UserType.Developer);
    } else {
      fail();
    }
  });

  it('should be able to register', async () => {
    let response = await service.registerDeveloper(
      "test@angular.com",
      "angular1234",
      "onur",
      null,
      null,
      null,
      null,
      null      
    );

    if (response.tag === 'value') {
      let isCreated = response.value;

      expect(isCreated);

      let resp = await service.deleteAccount();

      expect(resp);
    } else {
      fail();
    }
  })
});
