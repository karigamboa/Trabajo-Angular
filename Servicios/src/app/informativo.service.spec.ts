import { TestBed } from '@angular/core/testing';

import { InformativoService } from './informativo.service';

describe('InformativoService', () => {
  let service: InformativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
