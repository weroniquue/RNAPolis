import { TestBed } from '@angular/core/testing';
import { ToolsService } from './tools.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: ToolsService = TestBed.get(ToolsService);
    expect(service).toBeTruthy();
  });
});
