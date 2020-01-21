import { TestBed } from '@angular/core/testing';

import { PublicationsService } from './publications.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PublicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: PublicationsService = TestBed.get(PublicationsService);
    expect(service).toBeTruthy();
  });
});
