import { Module } from '@nestjs/common';
import { SavePostService } from './save-post.service';
import { SavePostController } from './save-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { SavePostSchema } from './entities/save-post.entity';
import { UserSchema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SavePost', schema: SavePostSchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [SavePostController],
  providers: [SavePostService],
})
export class SavePostModule {}
