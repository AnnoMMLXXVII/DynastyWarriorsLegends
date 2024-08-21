import { TestBed } from '@angular/core/testing';

import { WarriorsLegendsAPIService } from './warriors-legends-api.service';

describe('WarriorsLegendsAPIService', () => {
  let service: WarriorsLegendsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarriorsLegendsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
