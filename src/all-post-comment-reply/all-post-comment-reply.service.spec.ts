import { Test, TestingModule } from '@nestjs/testing';
import { AllPostCommentReplyService } from './all-post-comment-reply.service';

describe('AllPostCommentReplyService', () => {
  let service: AllPostCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllPostCommentReplyService],
    }).compile();

    service = module.get<AllPostCommentReplyService>(AllPostCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
