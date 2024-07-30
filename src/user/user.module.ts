import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { AuthSchema } from 'src/auth/entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { UserReviewSchema } from './entities/review.entity';
import { FollowSchema } from 'src/follow/entities/follow.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Auth', schema: AuthSchema },
      { name: 'UserReview', schema: UserReviewSchema },
      { name: 'Follow', schema: FollowSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService],
  exports: [UserService],
})
export class UserModule {}
