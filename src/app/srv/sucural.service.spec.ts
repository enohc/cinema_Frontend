import { TestBed } from '@angular/core/testing';

import { SucuralService } from './sucural.service';

describe('SucuralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucuralService = TestBed.get(SucuralService);
    expect(service).toBeTruthy();
  });
});
