import { Test, TestingModule } from '@nestjs/testing';
import { PostAgentService } from './post-agent.service';

describe('PostAgentService', () => {
  let service: PostAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostAgentService],
    }).compile();

    service = module.get<PostAgentService>(PostAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
