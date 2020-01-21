import { TestBed } from '@angular/core/testing';

import { TeamMembersService } from './team-members.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeamMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: TeamMembersService = TestBed.get(TeamMembersService);
    expect(service).toBeTruthy();
  });
});
