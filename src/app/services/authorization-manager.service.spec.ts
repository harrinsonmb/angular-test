import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationManagerService } from './authorization-manager.service';

describe('AuthorizationManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationManagerService]
    });
  });

  it('should be created', inject([AuthorizationManagerService], (service: AuthorizationManagerService) => {
    expect(service).toBeTruthy();
  }));
});
