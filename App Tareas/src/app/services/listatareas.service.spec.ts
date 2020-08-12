import { TestBed } from '@angular/core/testing';

import { ListatareasService } from './listatareas.service';

describe('ListatareasService', () => {
  let service: ListatareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListatareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
