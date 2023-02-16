import { TestBed } from '@angular/core/testing';

import { AuthenticationEmployeeService } from './authentication-employee.service';

describe('AuthenticationEmployeeService', () => {
  let service: AuthenticationEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
