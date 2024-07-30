import { Test, TestingModule } from '@nestjs/testing';
import { AllPostCommentReplyController } from './all-post-comment-reply.controller';
import { AllPostCommentReplyService } from './all-post-comment-reply.service';

describe('AllPostCommentReplyController', () => {
  let controller: AllPostCommentReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllPostCommentReplyController],
      providers: [AllPostCommentReplyService],
    }).compile();

    controller = module.get<AllPostCommentReplyController>(AllPostCommentReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
