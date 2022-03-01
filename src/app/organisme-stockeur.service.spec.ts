import { TestBed } from '@angular/core/testing';

import { OrganismeStockeurService } from './organisme-stockeur.service';

describe('OrganismeStockeurService', () => {
  let service: OrganismeStockeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismeStockeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
