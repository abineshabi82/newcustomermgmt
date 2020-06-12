import { TestBed } from '@angular/core/testing';

import { CusService } from './cus.service';

describe('CusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CusService = TestBed.get(CusService);
    expect(service).toBeTruthy();
  });
});
