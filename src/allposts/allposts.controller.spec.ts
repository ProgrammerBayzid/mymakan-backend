import { Test, TestingModule } from '@nestjs/testing';
import { AllpostsController } from './allposts.controller';
import { AllpostsService } from './allposts.service';

describe('AllpostsController', () => {
  let controller: AllpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllpostsController],
      providers: [AllpostsService],
    }).compile();

    controller = module.get<AllpostsController>(AllpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
