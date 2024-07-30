import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './entities/agent.entity';
import { AuthSchema } from 'src/auth/entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { AgentReviewSchema } from './entities/review.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { FollowSchema } from 'src/follow/entities/follow.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
      { name: 'AgentReview', schema: AgentReviewSchema },
      { name: 'Auth', schema: AuthSchema },
      { name: 'Follow', schema: FollowSchema },
    ]),
  ],
  controllers: [AgentController],
  providers: [AgentService,JwtService],
  exports: [AgentService],
})
export class AgentModule {}
