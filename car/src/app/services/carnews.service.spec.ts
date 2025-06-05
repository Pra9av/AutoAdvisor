import { TestBed } from '@angular/core/testing';

import { CarnewsService } from './carnews.service';

describe('CarnewsService', () => {
  let service: CarnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
