import { TestBed } from '@angular/core/testing';

import { FeenodeService } from './feenode.service';

describe('FeenodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeenodeService = TestBed.get(FeenodeService);
    expect(service).toBeTruthy();
  });
});
