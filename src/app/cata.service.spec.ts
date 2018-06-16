import { TestBed, inject } from '@angular/core/testing';

import { CataService } from './cata.service';

describe('CataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CataService]
    });
  });

  it('should be created', inject([CataService], (service: CataService) => {
    expect(service).toBeTruthy();
  }));
});
