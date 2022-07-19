import { TestBed } from '@angular/core/testing';

import { GridBreakpointsService } from './grid-breakpoints.service';

describe('GridBreakpointsService', () => {
  let service: GridBreakpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridBreakpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
