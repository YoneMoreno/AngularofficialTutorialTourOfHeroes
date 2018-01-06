import { TestBed, inject } from '@angular/core/testing';

import { MyHeroService } from './my-hero.service';

describe('MyHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHeroService]
    });
  });

  it('should be created', inject([MyHeroService], (service: MyHeroService) => {
    expect(service).toBeTruthy();
  }));
});
