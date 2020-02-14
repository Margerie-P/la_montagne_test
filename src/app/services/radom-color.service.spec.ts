import { TestBed } from '@angular/core/testing';

import { RadomColorService } from './radom-color.service';

describe('RadomColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadomColorService = TestBed.get(RadomColorService);
    expect(service).toBeTruthy();
  });
});
