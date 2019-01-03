import { TestBed } from '@angular/core/testing';

import { MangasService } from './mangas.service';

describe('MangasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangasService = TestBed.get(MangasService);
    expect(service).toBeTruthy();
  });
});
