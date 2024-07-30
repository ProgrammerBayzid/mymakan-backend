import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowController } from './follow.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentFollowSchema } from './entities/agent.follow.entity';
import { BuyerFollowSchema } from './entities/buyer.follow.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { FollowSchema } from './entities/follow.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AgentFollow', schema: AgentFollowSchema },
      { name: 'BuyerFollow', schema: BuyerFollowSchema },
      { name: 'Follow', schema: FollowSchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
