import { Test, TestingModule } from '@nestjs/testing';
import { PostUserController } from './post-user.controller';
import { PostUserService } from './post-user.service';

describe('PostUserController', () => {
  let controller: PostUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostUserController],
      providers: [PostUserService],
    }).compile();

    controller = module.get<PostUserController>(PostUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
