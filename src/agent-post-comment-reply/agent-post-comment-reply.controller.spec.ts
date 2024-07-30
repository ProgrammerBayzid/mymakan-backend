import { Test, TestingModule } from '@nestjs/testing';
import { AgentPostCommentReplyController } from './agent-post-comment-reply.controller';
import { AgentPostCommentReplyService } from './agent-post-comment-reply.service';

describe('AgentPostCommentReplyController', () => {
  let controller: AgentPostCommentReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentPostCommentReplyController],
      providers: [AgentPostCommentReplyService],
    }).compile();

    controller = module.get<AgentPostCommentReplyController>(AgentPostCommentReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
