import { Module } from '@nestjs/common';
import { AllpostsService } from './allposts.service';
import { AllpostsController } from './allposts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { AllPostSchema } from './entities/allpost.entity';
import { SavePostSchema } from 'src/save-post/entities/save-post.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AllPost', schema: AllPostSchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
      { name: 'SavePost', schema: SavePostSchema },
    ]),
  ],
  controllers: [AllpostsController],
  providers: [AllpostsService],
})
export class AllpostsModule {}
