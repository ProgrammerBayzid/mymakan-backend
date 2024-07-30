import { Test, TestingModule } from '@nestjs/testing';
import { UserPostCommentController } from './user-post-comment.controller';
import { UserPostCommentService } from './user-post-comment.service';

describe('UserPostCommentController', () => {
  let controller: UserPostCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPostCommentController],
      providers: [UserPostCommentService],
    }).compile();

    controller = module.get<UserPostCommentController>(UserPostCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
