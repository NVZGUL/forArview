import { TestBed, inject } from '@angular/core/testing';

import { WarehouseServiceService } from './warehouse-service.service';

describe('WarehouseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehouseServiceService]
    });
  });

  it('should ...', inject([WarehouseServiceService], (service: WarehouseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
