import { Test, TestingModule } from '@nestjs/testing';
import { PostFieldDataController } from './post-field-data.controller';
import { PostFieldDataService } from './post-field-data.service';

describe('PostFieldDataController', () => {
  let controller: PostFieldDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostFieldDataController],
      providers: [PostFieldDataService],
    }).compile();

    controller = module.get<PostFieldDataController>(PostFieldDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
