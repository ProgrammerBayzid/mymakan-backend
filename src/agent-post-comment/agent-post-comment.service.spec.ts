import { Test, TestingModule } from '@nestjs/testing';
import { AgentPostCommentService } from './agent-post-comment.service';

describe('AgentPostCommentService', () => {
  let service: AgentPostCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentPostCommentService],
    }).compile();

    service = module.get<AgentPostCommentService>(AgentPostCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
