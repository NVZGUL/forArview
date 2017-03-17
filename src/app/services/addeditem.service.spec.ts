import { TestBed, inject } from '@angular/core/testing';

import { AddeditemService } from './addeditem.service';

describe('AddeditemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddeditemService]
    });
  });

  it('should ...', inject([AddeditemService], (service: AddeditemService) => {
    expect(service).toBeTruthy();
  }));
});
