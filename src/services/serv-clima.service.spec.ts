import { TestBed } from '@angular/core/testing';

import { ServClimaService } from '../services/serv-clima.service';

describe('ServClimaService', () => {
  let service: ServClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
