import { TestBed } from '@angular/core/testing';

import { WeatherFetcher } from './weather-fetcher';

describe('WeatherFetcher', () => {
  let service: WeatherFetcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFetcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
