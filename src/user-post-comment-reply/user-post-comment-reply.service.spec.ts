import { Test, TestingModule } from '@nestjs/testing';
import { UserPostCommentReplyService } from './user-post-comment-reply.service';

describe('UserPostCommentReplyService', () => {
  let service: UserPostCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPostCommentReplyService],
    }).compile();

    service = module.get<UserPostCommentReplyService>(UserPostCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
