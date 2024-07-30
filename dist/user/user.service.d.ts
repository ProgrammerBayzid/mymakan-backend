/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import mongoose from 'mongoose';
import { AuthDocument } from 'src/auth/entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserReview } from './entities/review.entity';
import { CreateUserReviewDto } from './dto/create-review.dto';
import { FollowDocument } from 'src/follow/entities/follow.entity';
import { QueryUserDto } from './dto/QueryUserDto';
export declare class UserService {
    private readonly userModel;
    private authModel;
    private userReviewModel;
    private readonly followModel;
    private readonly config;
    private readonly jwtService;
    constructor(userModel: mongoose.Model<UserDocument>, authModel: mongoose.Model<AuthDocument>, userReviewModel: mongoose.Model<UserReview>, followModel: mongoose.Model<FollowDocument>, config: ConfigService, jwtService: JwtService);
    userCreate(createUserDto: CreateUserDto): Promise<User>;
    userCreateWithGoogle(createUserDto: CreateUserDto): Promise<User>;
    private sanitizeUser;
    private hashPassword;
    findOneByEmailForEmailOrPasswordChange(email: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findUserWithPasswordByEmail(email: string): Promise<User>;
    updatePassword(id: string, password: string): Promise<User>;
    updateVerificationEmailSentStatus(id: string, status: boolean): Promise<User>;
    findAllUser(userId: string, role: string, queryOptions?: QueryUserDto): Promise<User[]>;
    findMyProfile(id: string): Promise<User>;
    findById(id: string, userId: string, role: string): Promise<User>;
    updateById(buyerID: string, updateBuyer: UpdateUserDto): Promise<User>;
    updateUserEmailVerify(id: string): Promise<User>;
    deleteById(id: string): Promise<User>;
    adminPanelUserDelete(id: string): Promise<User>;
    reviewCreate(agentId: string, createUserReviewDto: CreateUserReviewDto): Promise<mongoose.Document<unknown, {}, UserReview> & UserReview & {
        _id: mongoose.Types.ObjectId;
    }>;
    findMyReview(id: string): Promise<UserReview[]>;
}
