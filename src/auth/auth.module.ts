import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './entities/auth.entity';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { AtStrategy } from './strategies/access-token.strategy';
import { RtStrategy } from './strategies/refresh-token.strategy';
import { EmailService } from 'src/email/email.service';
import { EmailModule } from 'src/email/email.module';
import { Agent, AgentSchema } from 'src/agent/entities/agent.entity';
import { AgentModule } from 'src/agent/agent.module';
import { AgentFollow, AgentFollowSchema } from 'src/follow/entities/agent.follow.entity';
import { BuyerFollow, BuyerFollowSchema } from 'src/follow/entities/buyer.follow.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: '8739c4aaddb29d8b017c55c25249266effbe144a',
      global: true,
    }),
    MongooseModule.forFeature([
      { name: Auth.name, schema: AuthSchema },
      { name: User.name, schema: UserSchema },
      { name: Agent.name, schema: AgentSchema },
      { name: AgentFollow.name, schema: AgentFollowSchema },
      { name: BuyerFollow.name, schema: BuyerFollowSchema },
    ]),
    UserModule,
    AgentModule,
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AtStrategy,
    RtStrategy,
    {
      provide: 'MAILER', // Define the token
      useClass: EmailService, // Provide the mailer service which creates the nodemailer transporter
    },
  ],
})
export class AuthModule {}
