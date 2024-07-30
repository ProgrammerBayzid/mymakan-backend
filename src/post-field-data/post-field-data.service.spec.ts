import { Test, TestingModule } from '@nestjs/testing';
import { PostFieldDataService } from './post-field-data.service';

describe('PostFieldDataService', () => {
  let service: PostFieldDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostFieldDataService],
    }).compile();

    service = module.get<PostFieldDataService>(PostFieldDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
