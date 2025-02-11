import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContestService } from './contest.service';

describe('ContestService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ContestService = TestBed.get(ContestService);
    expect(service).toBeTruthy();
  });
});
