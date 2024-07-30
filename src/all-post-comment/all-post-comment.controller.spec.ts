import { Test, TestingModule } from '@nestjs/testing';
import { AllPostCommentController } from './all-post-comment.controller';
import { AllPostCommentService } from './all-post-comment.service';

describe('AllPostCommentController', () => {
  let controller: AllPostCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllPostCommentController],
      providers: [AllPostCommentService],
    }).compile();

    controller = module.get<AllPostCommentController>(AllPostCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
