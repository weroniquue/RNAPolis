import { TestBed } from '@angular/core/testing';

import { AwardsService } from './awards.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AwardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: AwardsService = TestBed.get(AwardsService);
    expect(service).toBeTruthy();
  });
});
