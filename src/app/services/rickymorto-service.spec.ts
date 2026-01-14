import { TestBed } from '@angular/core/testing';

import { RickymortoService } from './rickymorto-service';

describe('RickymortoService', () => {
  let service: RickymortoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickymortoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
