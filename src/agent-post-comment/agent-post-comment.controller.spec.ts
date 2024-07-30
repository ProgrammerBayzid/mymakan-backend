import { Test, TestingModule } from '@nestjs/testing';
import { AgentPostCommentController } from './agent-post-comment.controller';
import { AgentPostCommentService } from './agent-post-comment.service';

describe('AgentPostCommentController', () => {
  let controller: AgentPostCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentPostCommentController],
      providers: [AgentPostCommentService],
    }).compile();

    controller = module.get<AgentPostCommentController>(AgentPostCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
