import { Test, TestingModule } from '@nestjs/testing';
import { UserPostCommentReplyController } from './user-post-comment-reply.controller';
import { UserPostCommentReplyService } from './user-post-comment-reply.service';

describe('UserPostCommentReplyController', () => {
  let controller: UserPostCommentReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPostCommentReplyController],
      providers: [UserPostCommentReplyService],
    }).compile();

    controller = module.get<UserPostCommentReplyController>(UserPostCommentReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
