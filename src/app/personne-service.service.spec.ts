/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonneServiceService } from './personne-service.service';

describe('Service: PersonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneServiceService]
    });
  });

  it('should ...', inject([PersonneServiceService], (service: PersonneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
