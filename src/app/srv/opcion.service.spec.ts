import { TestBed } from '@angular/core/testing';

import { OpcionService } from './opcion.service';

describe('OpcionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpcionService = TestBed.get(OpcionService);
    expect(service).toBeTruthy();
  });
});
