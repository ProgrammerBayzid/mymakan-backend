import { Test, TestingModule } from '@nestjs/testing';
import { UserPostCommentService } from './user-post-comment.service';

describe('UserPostCommentService', () => {
  let service: UserPostCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPostCommentService],
    }).compile();

    service = module.get<UserPostCommentService>(UserPostCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
