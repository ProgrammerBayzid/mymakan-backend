import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CreateUserReviewDto } from './dto/create-review.dto';
import { UserReview } from './entities/review.entity';
import { QueryUserDto } from './dto/QueryUserDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAllAgent(userId?: string, role?: string, queryOptions?: QueryUserDto): Promise<User[]>;
    findMyProfile(userId?: string): Promise<User>;
    getUser(id: string, userId?: string, role?: string): Promise<User>;
    updateDoctor(userId: string, updateUser: UpdateUserDto): Promise<User>;
    deleteUser(userId: string): Promise<User>;
    deleteUserByAdminPanel(id: string): Promise<User>;
    createDoctor(createUserReviewDto: CreateUserReviewDto, agentId?: string): Promise<UserReview>;
    findMyReview(userId?: string): Promise<UserReview[]>;
}
