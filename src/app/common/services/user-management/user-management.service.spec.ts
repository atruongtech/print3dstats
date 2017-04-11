import { TestBed, inject } from '@angular/core/testing';

import { UserManagementService } from './user-management.service';

describe('UserManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagementService]
    });
  });

  it('should ...', inject([UserManagementService], (service: UserManagementService) => {
    expect(service).toBeTruthy();
  }));
});
