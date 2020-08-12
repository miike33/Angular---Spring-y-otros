import { TestBed } from '@angular/core/testing';

import { LeavePageService } from './leave-page.service';

describe('LeavePageService', () => {
  let service: LeavePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
