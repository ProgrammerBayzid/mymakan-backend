import { Test, TestingModule } from '@nestjs/testing';
import { AgentPostCommentReplyService } from './agent-post-comment-reply.service';

describe('AgentPostCommentReplyService', () => {
  let service: AgentPostCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentPostCommentReplyService],
    }).compile();

    service = module.get<AgentPostCommentReplyService>(AgentPostCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
