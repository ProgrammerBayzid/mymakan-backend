import { Module } from '@nestjs/common';
import { PostUserService } from './post-user.service';
import { PostUserController } from './post-user.controller';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { AgentReviewSchema } from 'src/agent/entities/review.entity';
import { AuthSchema } from 'src/auth/entities/auth.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserSchema } from './entities/post-user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostUser', schema: PostUserSchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
      { name: 'AgentReview', schema: AgentReviewSchema },
      { name: 'Auth', schema: AuthSchema },
    ]),
  ],
  controllers: [PostUserController],
  providers: [PostUserService],
})
export class PostUserModule {}
