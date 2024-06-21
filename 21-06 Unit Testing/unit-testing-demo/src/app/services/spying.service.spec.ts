import { TestBed } from '@angular/core/testing';

import { SpyingService } from './spying.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SpyingService', () => {
  let service: SpyingService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        SpyingService,
      ],
    })
  );
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
