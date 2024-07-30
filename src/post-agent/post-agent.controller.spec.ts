import { Test, TestingModule } from '@nestjs/testing';
import { PostAgentController } from './post-agent.controller';
import { PostAgentService } from './post-agent.service';

describe('PostAgentController', () => {
  let controller: PostAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostAgentController],
      providers: [PostAgentService],
    }).compile();

    controller = module.get<PostAgentController>(PostAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
