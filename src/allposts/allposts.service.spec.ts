import { Test, TestingModule } from '@nestjs/testing';
import { AllpostsService } from './allposts.service';

describe('AllpostsService', () => {
  let service: AllpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllpostsService],
    }).compile();

    service = module.get<AllpostsService>(AllpostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
