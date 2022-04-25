import { TestBed } from '@angular/core/testing';

import { VvLibService } from './vv-lib.service';

describe('VvLibService', () => {
  let service: VvLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VvLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
