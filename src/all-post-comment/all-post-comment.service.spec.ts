import { Test, TestingModule } from '@nestjs/testing';
import { AllPostCommentService } from './all-post-comment.service';

describe('AllPostCommentService', () => {
  let service: AllPostCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllPostCommentService],
    }).compile();

    service = module.get<AllPostCommentService>(AllPostCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
